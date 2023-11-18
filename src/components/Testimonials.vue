<template>
  <div class="testimonials-container">
    <div class="testimonial-cards">
      <div
        v-for="(testimonial, index) in allTestimonials"
        :key="'testimonial-' + index"
        class="testimonial-card"
        :class="{ 'is-active': isTestimonialActive(index) }"
      >
        <div class="testimonial-quote">{{ testimonial.quote }}</div>
        <div class="testimonial-author">{{ testimonial.author }}</div>
        <div class="testimonial-title">{{ testimonial.title }}</div>
      </div>
    </div>
    <div class="testimonial-navigation">
      <span
        v-for="index in navigationDots"
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
    // Stato iniziale
    const testimonials = ref([])
    const currentSlide = ref(0)
    const slideWidth = ref(0)

    // Ottieni i testimonial e imposta il carousel
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/testimonials.json')
        if (!response.ok) throw new Error('Failed to fetch testimonials.json')
        testimonials.value = await response.json()
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    // Imposta la larghezza di ogni slide in base alla larghezza del contenitore
    const setSlideWidth = () => {
      const container = document.querySelector('.testimonials-container')
      if (container) {
        slideWidth.value = container.offsetWidth / 9
      }
    }

    // Testimonial totali, inclusi i cloni per il loop infinito
    const allTestimonials = computed(() => {
      const clonesBefore = testimonials.value.slice(-3)
      const clonesAfter = testimonials.value.slice(0, 3)
      return clonesBefore.concat(testimonials.value, clonesAfter)
    })
    // Verifica se un testimonial è attivo
    const isTestimonialActive = (index) => {
      const normalizedIndex = index - 3 + currentSlide.value
      return normalizedIndex >= 0 && normalizedIndex < 3
    }
    // Naviga a un gruppo specifico di testimonial
    const navigateToGroup = (groupIndex) => {
      currentSlide.value = groupIndex
    }

    // Punti di navigazione
    const navigationDots = computed(() => {
      return testimonials.value.length
    })

    // Verifica se un punto di navigazione è attivo
    const isDotActive = (dotIndex) => {
      return dotIndex === currentSlide.value
    }

    // Current slide index
    const normalizedIndex = computed(() => {
      return (
        (currentSlide.value + clonedGroups * 3) % testimonialGroups.value.length
      )
    })

    // Automatic sliding logic
    let slideInterval = null
    const startSliding = () => {
      clearInterval(slideInterval)
      slideInterval = setInterval(() => {
        currentSlide.value =
          (currentSlide.value + 1) % testimonials.value.length
      }, 5000)
    }

    watch(slideWidth, (newWidth) => {
      document.documentElement.style.setProperty(
        '--slide-width',
        `${newWidth}px`
      )
    })

    // Watch per aggiornamenti del slide corrente
    watch(currentSlide, (newVal, oldVal) => {
      const testimonialCards = document.querySelector('.testimonial-cards')
      if (testimonialCards) {
        const newOffset = -(newVal + 3) * slideWidth.value // Calcola il nuovo offset
        testimonialCards.style.transform = `translateX(${newOffset}px)`
      }

      // Gestisce il loop infinito
      if (newVal === testimonials.value.length) {
        nextTick(() => {
          testimonialCards.style.transition = 'none'
          currentSlide.value = 0
          testimonialCards.style.transform = 'translateX(0px)'
          setTimeout(() => {
            testimonialCards.style.transition = ''
          }, 0)
        })
      }
    })

    // Initialization
    onMounted(async () => {
      await fetchTestimonials()
      setSlideWidth()
      startSliding()
      window.addEventListener('resize', setSlideWidth)
    })

    // Cleanup
    onBeforeUnmount(() => {
      clearInterval(slideInterval)
      window.removeEventListener('resize', setSlideWidth)
    })

    return {
      testimonials,
      currentSlide,
      navigateToGroup,
      navigationDots,
      allTestimonials,
      isDotActive,
      slideWidth,
      isTestimonialActive,
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
