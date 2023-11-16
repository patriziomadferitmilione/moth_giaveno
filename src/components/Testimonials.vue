<template>
  <div class="testimonials-container">
    <div class="testimonial-cards">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
        class="testimonial-card"
        :class="{ 'is-hidden': index < currentSlide }"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <h2>{{ testimonial.title }}</h2>
        <p>{{ testimonial.text }}</p>
        <div class="testimonial-footer">
          <img
            :src="testimonial.image_path"
            :alt="testimonial.name"
            class="testimonial-image"
          />
          <div>
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const testimonials = ref([])
    const currentSlide = ref(0)
    const testimonialsPerPage = 3

    async function fetchTestimonials() {
      try {
        const response = await fetch('/testimonials.json')
        if (response.ok) {
          testimonials.value = await response.json()
        } else {
          console.error('Failed to fetch testimonials.json')
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    onMounted(async () => {
      await fetchTestimonials()
      setInterval(() => {
        if (
          currentSlide.value <
          testimonials.value.length - testimonialsPerPage
        ) {
          currentSlide.value++
        } else {
          currentSlide.value = 0
        }
      }, 5000)
    })

    return {
      testimonials,
      currentSlide,
    }
  },
}
</script>

<style scoped>
.testimonials-container {
  overflow: hidden;
  width: 100%; /* Ensure the container takes up the full width */
}

.testimonial-cards {
  display: flex;
  transition: transform 0.5s ease-out; /* Smooth out the transition effect */
  will-change: transform; /* Optimizes the animation */
}

.testimonial-card {
  flex: 0 0 calc(100% / 3); /* Each card takes up exactly 1/3 of the container width */
  color: #212121;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-right: 0.5rem; /* Add space between cards if needed */
  display: flex; /* Ensure content within cards is properly aligned */
  flex-direction: column; /* Stack card content vertically */
  justify-content: center; /* Center content vertically within each card */
  align-items: center; /* Center content horizontally */
}

.testimonial-footer {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.testimonial-image {
  width: 80px; /* Adjust size as needed */
  height: 80px; /* Adjust size as needed */
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover; /* Ensure images don't get distorted */
}
</style>
