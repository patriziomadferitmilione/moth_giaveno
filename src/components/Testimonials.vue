<template>
  <div class="carousel">
    <Carousel
      :autoplay="3000"
      :wrap-around="true"
      :items-to-show="3"
      pauseAutoplayOnHover="true"
    >
      <Slide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="carousel__item">
          <img
            :src="testimonial.image_path"
            :alt="testimonial.name"
            class="testimonial-image"
          />
          <!-- <h2>{{ testimonial.title }}</h2> -->
          <p>{{ testimonial.text }}</p>
          <p>{{ testimonial.name }}</p>
          <h6>{{ testimonial.position }}</h6>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CombinedCarousel',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      testimonials: [],
    }
  },
  mounted() {
    this.fetchTestimonials()
  },
  methods: {
    async fetchTestimonials() {
      try {
        const response = await fetch('/testimonials.json')
        if (!response.ok) throw new Error('Failed to fetch testimonials data')
        this.testimonials = await response.json()
      } catch (error) {
        console.error('Error fetching testimonials data:', error)
      }
    },
  },
})
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100vw;
  height: 40vh;
}

.carousel__item {
  color: #212121;
  font-size: 1.2rem;
  box-shadow: 5px 4px 8px var(--link);
  background-color: var(--shadow3);
  border-radius: 5px;
  padding: 2rem 0;
  width: 30vw;
  height: 25vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.carousel__item p {
  max-width: 55%;
}

.carousel__item img {
  max-width: 15%;
  position: absolute;
  left: 3%;
  top: 3%;
}

.carousel__item h2 {
  font-size: 1.8rem;
}
</style>
