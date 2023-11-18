<template>
  <div class="testimonials-container">
    <div class="testimonial-cards">
      <div
        v-for="(group, groupIndex) in testimonialGroups"
        :key="'group-' + groupIndex"
        class="testimonial-group"
        :class="{ active: isGroupActive(groupIndex) }"
      >
        <div
          v-for="(testimonial, index) in group"
          :key="'testimonial-' + groupIndex + '-' + index"
          class="testimonial-card"
        >
          <!-- Testimonial content goes here -->
        </div>
      </div>
    </div>
    <div class="testimonial-navigation">
      <span
        v-for="(dot, index) in testimonialGroups"
        :key="'dot-' + index"
        class="navigation-dot"
        :class="{ active: isDotActive(index) }"
        @click="navigateToGroup(index)"
      ></span>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed, nextTick, onBeforeUnmount, watch } from 'vue'

export default {
  setup() {
    const testimonials = ref([])
    const currentSlide = ref(0)
    const clonedGroups = 1 // Cloning only one group of testimonials at each end

    // Compute groups of testimonials
    const testimonialGroups = computed(() => {
      let groups = []
      if (testimonials.value.length) {
        for (let i = 0; i < testimonials.value.length; i += 3) {
          groups.push(testimonials.value.slice(i, i + 3))
        }
        // Cloning groups for a seamless looping effect
        const clonesAtStart = groups.slice(-clonedGroups)
        const clonesAtEnd = groups.slice(0, clonedGroups)
        return clonesAtStart.concat(groups, clonesAtEnd)
      }
      return []
    })

    // Fetch testimonials from a JSON file
    async function fetchTestimonials() {
      try {
        const response = await fetch('/testimonials.json')
        if (response.ok) {
          const originalTestimonials = await response.json()
          testimonials.value = originalTestimonials
          currentSlide.value = clonedGroups * 3
        } else {
          console.error('Failed to fetch testimonials.json')
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    // Check if a group of testimonials is currently active
    const isGroupActive = (groupIndex) => {
      const totalGroups = testimonialGroups.value.length - 2 * clonedGroups
      const normalizedIndex =
        (currentSlide.value / 3 + totalGroups) % totalGroups
      return groupIndex === normalizedIndex
    }

    // Navigate to a specific group of testimonials
    const navigateToGroup = (groupIndex) => {
      currentSlide.value = groupIndex * 3 + clonedGroups * 3
      // Reset the interval for automatic sliding
      startSliding()
    }

    // Automatic sliding logic
    const startSliding = () => {
      setInterval(() => {
        let newSlide = currentSlide.value + 3
        if (newSlide >= testimonials.value.length - clonedGroups * 3) {
          newSlide = clonedGroups * 3
        }
        currentSlide.value = newSlide
      }, 5000)
    }

    // Compute the offset for the sliding effect
    const slideOffset = computed(() => {
      const offset = (currentSlide.value / 3 - clonedGroups) * 100
      return `-${offset}%`
    })

    // Check if a dot for navigation is currently active
    const isDotActive = (dotIndex) => {
      const groupSize = 3
      const startIndex = Math.floor(currentSlide.value / groupSize)
      return dotIndex >= startIndex && dotIndex < startIndex + clonedGroups
    }

    // Setup function to initialize testimonials and start automatic sliding
    onMounted(async () => {
      await fetchTestimonials()
      startSliding()
    })

    // Cleanup before the component is unmounted
    onBeforeUnmount(() => {
      clearInterval(slideInterval)
    })

    // Watch for changes in the current slide and adjust the CSS accordingly
    watch(currentSlide, () => {
      nextTick(() => {
        const testimonialCards = document.querySelector('.testimonial-cards')
        if (testimonialCards) {
          if (currentSlide.value !== clonedGroups * 3) {
            testimonialCards.style.transition = 'transform 0.5s ease'
          }
          testimonialCards.style.transform = `translateX(${slideOffset.value})`
        }
      })
    })

    return {
      testimonials,
      currentSlide,
      testimonialGroups,
      navigateToGroup,
      isGroupActive,
      slideOffset,
      isDotActive,
    }
  },
}
</script>

<style scoped>
.testimonials-container {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
}

.testimonial-cards {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  transform-origin: center center;
}

.testimonial-card {
  flex: 0 0 calc(33.33% - 1rem);
  background-color: var(--red);
  margin: 0.5rem;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 1.5s ease;
}

.testimonial-footer {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
}

h2,
h3,
p {
  margin: 0;
}

h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

h3 {
  color: #555;
  font-size: 1rem;
}

p {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-navigation {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.navigation-dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigation-dot.active {
  background-color: #333;
}

.testimonial-bubble {
  position: relative;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.testimonial-quote::before {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: var(--white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
