<template>
  <div>
    <div class="page-header">
      <img :src="currentImage" alt="Header Image" class="header-image" />
      <h1 class="header-title">Moth Lutherie</h1>

      <div class="nav-dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="dot"
          :class="{ active: currentImageIndex === index }"
          @click="setCurrentImageIndex(index)"
        ></span>
      </div>
    </div>
    <Testimonials />
  </div>
</template>

<script>
import Testimonials from './Testimonials.vue'

export default {
  components() {
    Testimonials
  },
  data() {
    return {
      currentImageIndex: 0,
      images: ['/images/3.jpg', '/images/4.jpg', '/images/6.jpg'],
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    },
  },
  methods: {
    setCurrentImageIndex(index) {
      this.currentImageIndex = index
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    },
  },
  mounted() {
    setInterval(this.nextImage, 3000)
  },
}
</script>

<style scoped>
.page-header {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  z-index: 1;
}

.nav-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dot.active {
  background-color: #717171;
}
</style>
