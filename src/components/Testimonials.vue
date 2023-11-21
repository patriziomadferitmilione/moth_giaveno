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
import { ref, computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'

export default {
  setup() {
    // State
    const testimonials = ref([])
    const currentSlide = ref(0)
    const cardWidth = ref(0)
    const allTestimonials = ref([])

    // Fetch testimonials and set up the carousel
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/testimonials.json')
        if (!response.ok) throw new Error('Failed to fetch testimonials.json')
        testimonials.value = await response.json()
        allTestimonials.value = [
          ...testimonials.value,
          ...testimonials.value,
          ...testimonials.value,
        ] // Triple to allow infinite looping
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
    const slideWidth = computed(() => cardWidth.value)

    // Calculate the translateX value for looping
    const translateX = computed(() => -currentSlide.value * slideWidth.value)

    // Navigate to a specific group of testimonials
    const navigateToGroup = (groupIndex) => {
      currentSlide.value = groupIndex * 3
    }

    // Check if a dot is active based on the current slide
    const isDotActive = (dotIndex) => {
      const startIndex = currentSlide.value
      const endIndex = startIndex + 2 // Since three testimonials are visible at once

      // Check if the dotIndex is within the range of visible testimonials
      for (let i = startIndex; i <= endIndex; i++) {
        if (i % testimonials.value.length === dotIndex) {
          return true
        }
      }
      return false
    }

    // Automatic sliding logic
    let slideInterval = null
    const startSliding = () => {
      clearInterval(slideInterval)
      slideInterval = setInterval(() => {
        if (currentSlide.value >= allTestimonials.value.length - 3) {
          // Wrap to beginning after a timeout to allow for the transition to complete
          currentSlide.value += 1
          setTimeout(() => {
            nextTick(() => {
              const testimonialCards =
                document.querySelector('.testimonial-cards')
              testimonialCards.style.transition = 'none'
              currentSlide.value = testimonials.value.length // Jump to the first 'real' slide
              testimonialCards.style.transform = `translateX(${translateX.value}px)`
              setTimeout(() => {
                testimonialCards.style.transition = ''
              }, 0)
            })
          }, 1000) // Assuming the transition duration is 1s
        } else {
          currentSlide.value += 1
        }
      }, 5000)
    }

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

    // Watch for changes in the current slide and adjust the CSS accordingly
    watch(currentSlide, (newVal, oldVal) => {
      if (newVal < allTestimonials.value.length - 3 && newVal >= 0) {
        nextTick(() => {
          const testimonialCards = document.querySelector('.testimonial-cards')
          testimonialCards.style.transition = ''
          testimonialCards.style.transform = `translateX(${translateX.value}px)`
        })
      }
    })

    const visibleGroups = computed(() => testimonials.value.length) // Number of dots equals number of original testimonials

    return {
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
