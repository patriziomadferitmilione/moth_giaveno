<template>
  <div>
    <div class="page-header" :class="{ 'is-transitioning': isTransitioning }">
      <div class="image-container">
        <img :src="currentImage" alt="Header Image" class="header-image" />
        <!-- Add a dynamic key to the white-overlay -->
        <div class="white-overlay" :key="overlayKey"></div>
      </div>
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
  components: {
    Testimonials,
  },
  data() {
    return {
      currentImageIndex: 0,
      nextImageIndex: null, // Used to track the next image index during transition
      images: ['/images/3.jpg', '/images/4.jpg', '/images/6.jpg'],
      isTransitioning: false, // Flag to indicate if a transition is in progress
      overlayKey: 0,
    }
  },
  computed: {
    currentImage() {
      // Returns the current image URL based on the current image index
      return this.images[this.currentImageIndex]
    },
    nextImage() {
      // Returns the next image URL, or null if there's no next image
      return this.nextImageIndex !== null
        ? this.images[this.nextImageIndex]
        : null
    },
  },
  methods: {
    setCurrentImageIndex(index) {
      if (!this.isTransitioning) {
        this.nextImageIndex = index
        this.isTransitioning = true

        // Start the fade-to-white animation slightly before changing the image
        setTimeout(() => {
          this.overlayKey++ // Increment the overlay key to re-trigger the animation
        }, 1500) // Adjust this duration to control when the animation starts

        // Change the image after the animation has started
        setTimeout(() => {
          this.currentImageIndex = this.nextImageIndex
          this.nextImageIndex = null
          this.isTransitioning = false
        }, 2000) // Duration should match the CSS animation duration
      }
    },
    advanceToNextImage() {
      // Advances to the next image in the array
      const nextIndex = (this.currentImageIndex + 1) % this.images.length
      this.setCurrentImageIndex(nextIndex)
    },
  },
  mounted() {
    // Sets up an interval to automatically advance to the next image
    setInterval(this.advanceToNextImage, 3000)
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
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
}
.white-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  animation: fadeToWhite 2s ease-in-out forwards;
}
@keyframes fadeToWhite {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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
