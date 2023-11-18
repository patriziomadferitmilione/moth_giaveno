<template>
  <div class="testimonials-container">
    <div
      class="testimonial-cards"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <div
        v-for="(testimonial, index) in allTestimonials"
        :key="'testimonial-' + index"
        class="testimonial-card"
        :style="{ minWidth: cardWidth + 'px', flex: '0 0 ' + cardWidth + 'px' }"
      >
        <div class="testimonial-quote">{{ testimonial.quote }}</div>
        <div class="testimonial-author">{{ testimonial.author }}</div>
        <div class="testimonial-title">{{ testimonial.title }}</div>
      </div>
    </div>
    <div class="testimonial-navigation">
      <span
        v-for="index in visibleGroups"
        :key="'dot-' + index"
        class="navigation-dot"
        :class="{ active: isDotActive(index - 1) }"
        @click="navigateToGroup(index - 1)"
      ></span>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed, nextTick, onBeforeUnmount, watch } from 'vue'

export default {
  setup() {
    // State
    const testimonials = ref([])
    const currentSlide = ref(0)
    const cardWidth = ref(0)
    const clonedGroups = 1 // Number of cloned groups at each end
    const allTestimonials = ref([])

    // Fetch testimonials and set up the carousel
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/testimonials.json')
        if (!response.ok) throw new Error('Failed to fetch testimonials.json')
        testimonials.value = await response.json()
        allTestimonials.value = computeAllTestimonials()
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    // Set the card width based on the container's width
    const setCardWidth = () => {
      const container = document.querySelector('.testimonials-container')
      if (container) {
        cardWidth.value = container.offsetWidth * 0.3
      }
    }

    // Calculate the slide width based on the card width
    const slideWidth = computed(() => {
      return cardWidth.value
    })

    // Calculate the translateX value for looping
    const translateX = computed(() => {
      return -currentSlide.value * slideWidth.value
    })

    // Compute all testimonials, including clones for looping
    const computeAllTestimonials = () => {
      const clonedBefore = testimonials.value.slice(-3)
      const clonedAfter = testimonials.value.slice(0, 3)
      return clonedBefore.concat(testimonials.value, clonedAfter)
    }

    // Navigate to a specific group of testimonials
    const navigateToGroup = (groupIndex) => {
      currentSlide.value = groupIndex * 3
    }

    // Check if a dot is active based on the current slide
    const isDotActive = (dotIndex) => {
      const activeGroupIndex = Math.floor(currentSlide.value / 3)
      return dotIndex === activeGroupIndex
    }

    // Automatic sliding logic
    let slideInterval = null
    const startSliding = () => {
      clearInterval(slideInterval)
      slideInterval = setInterval(() => {
        currentSlide.value =
          (currentSlide.value + 1) % allTestimonials.value.length
      }, 5000)
    }

    const visibleGroups = computed(() => {
      // Calculate the number of visible groups (usually 1 or 2)
      return Math.ceil(allTestimonials.value.length / 3)
    })

    // Watch for changes in the current slide and adjust the CSS accordingly
    watch(currentSlide, (newVal, oldVal) => {
      const testimonialCards = document.querySelector('.testimonial-cards')
      if (testimonialCards) {
        if (newVal === 0) {
          nextTick(() => {
            testimonialCards.style.transition = 'none'
            currentSlide.value = testimonials.length * clonedGroups
            testimonialCards.style.transform = `translateX(-${
              testimonials.length * clonedGroups * slideWidth.value
            }px)`
            setTimeout(() => {
              testimonialCards.style.transition = ''
            }, 0)
          })
        }
      }
    })

    // Watch for changes in the current slide and update dot activation
    watch(currentSlide, () => {
      // Calculate the active dot index based on the current slide
      const activeGroupIndex = Math.floor(currentSlide.value / 3)
      const dots = document.querySelectorAll('.navigation-dot')
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeGroupIndex)
      })
    })

    // Initialization
    onMounted(async () => {
      await fetchTestimonials()
      setCardWidth()
      startSliding()
      window.addEventListener('resize', setCardWidth)
    })

    // Cleanup
    onBeforeUnmount(() => {
      clearInterval(slideInterval)
      window.removeEventListener('resize', setCardWidth)
    })

    return {
      testimonials,
      currentSlide,
      navigateToGroup,
      isDotActive,
      translateX,
      allTestimonials,
      visibleGroups,
      cardWidth,
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
  flex-wrap: nowrap; /* Ensure testimonials are in a single row */
  transition: transform 1s ease; /* Smooth transition for sliding */
}

.testimonial-card {
  min-width: calc(
    var(--slide-width) - 1rem
  ); /* Adjust width based on the container size */
  flex: 0 0 calc(var(--slide-width) - 1rem);
  background-color: #f5f5f5; /* Card background color */
  margin: 0.5rem;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}

.testimonial-quote {
  font-size: 1rem; /* Adjust font size as needed */
  color: #333; /* Text color */
  margin-bottom: 1rem;
}

.testimonial-author {
  font-weight: bold; /* Author name styling */
  color: #666;
}

.testimonial-title {
  font-style: italic; /* Title styling */
  color: #999;
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
  background-color: #ddd; /* Dot color */
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition for dot activation */
}

.navigation-dot.active {
  background-color: #333; /* Active dot color */
}

/* You may want to add more styles here based on your design requirements */
</style>
