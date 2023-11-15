<template>
  <div>
    <div class="page-header">
      <img :src="currentImage" alt="Header Image" class="header-image" />
      <h1 class="header-title">Moth Lutherie</h1>
    </div>

    <div class="other-section">
      <h1>Home Page</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
      images: [
        '/images/3.jpg', // Replace with your image paths
        '/images/4.jpg',
        '/images/6.jpg',
      ],
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    },
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }, 3000) // Change image every 3000 milliseconds (3 seconds)
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
  font-size: 3rem; /* Adjust size as needed */
  z-index: 1; /* Ensure the title is above the image */
}

.other-section {
  height: 200vh;
}
</style>
