<template>
  <Carousel
    :itemsToShow="3"
    :wrapAround="true"
    :transition="500"
    :autoplay="true"
    :autoplayTimeout="5000"
    ref="carousel"
    class="carousel"
  >
    <Slide
      v-for="(testimonial, index) in testimonials"
      :key="testimonial.title"
    >
      <div class="testimonial-card carousel__slide">
        <img
          :src="testimonial.image_path"
          :alt="testimonial.name"
          class="testimonial-image"
        />
        <h2>{{ testimonial.title }}</h2>
        <p>{{ testimonial.text }}</p>
        <p>{{ testimonial.name }}</p>
        <h6>{{ testimonial.position }}</h6>
      </div>
    </Slide>
  </Carousel>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, ref } from 'vue'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      testimonials: [],
      carousel: ref(null), // Create a ref for the carousel
    }
  },
  mounted() {
    this.fetchTestimonials()
    onMounted(() => {
      setTimeout(() => {
        if (this.carousel.value) {
          this.carousel.value.updateSlideWidth()
        }
      }, 500)
    })
  },
  methods: {
    async fetchTestimonials() {
      try {
        const response = await fetch('/testimonials.json')
        if (!response.ok) throw new Error('Failed to fetch testimonials data')
        this.testimonials = await response.json()
        console.log(this.testimonials)
      } catch (error) {
        console.error('Error fetching testimonials data:', error)
      }
    },
  },
}
</script>

<style scoped>
.carousel {
  height: 80vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonial-card {
  text-align: center;
  background: var(--white);
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  border: 2px solid red !important;
}

.carousel__slide {
  transform: scale(0.8);
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column !important;
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1.25);
  z-index: 1;
}

.carousel__slide--prev,
.carousel__slide--next {
  opacity: 0.8;
  z-index: 0;
  transform: scale(0.9);
}

.testimonial-card h2,
.testimonial-card p,
.testimonial-card h6 {
  color: #212121;
}

.testimonial-image {
  max-width: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: transform 0.5s ease;
}
</style>
