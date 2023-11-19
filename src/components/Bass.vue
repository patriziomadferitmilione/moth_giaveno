<template>
  <div>
    <!-- Bass Header -->
    <div class="page-header">
      <h1>Bass</h1>
    </div>

    <!-- Product Container -->
    <div class="product-container" v-if="basses.length > 0">
      <!-- Tabs -->
      <div class="tabs">
        <button
          v-for="(bass, index) in basses"
          :key="bass.name"
          @click="selectedBassIndex = index"
          :class="{ 'is-active': selectedBassIndex === index }"
        >
          {{ bass.name }}
        </button>
      </div>

      <!-- Product Details -->
      <div class="product-details">
        <div class="image-slider">
          <button @click="previousImage" class="slider-btn prev-btn">‹</button>
          <img
            :src="basses[selectedBassIndex].image_path"
            :alt="basses[selectedBassIndex].name"
            class="bass-image"
          />
          <button @click="nextImage" class="slider-btn next-btn">›</button>
        </div>
        <div class="description">
          <h2>{{ basses[selectedBassIndex].name }}</h2>
          <p>{{ basses[selectedBassIndex].description }}</p>
          <!-- Additional details like price, SKU, etc. -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basses: [],
      selectedBassIndex: 0,
    }
  },
  mounted() {
    this.fetchBasses()
  },
  methods: {
    async fetchBasses() {
      try {
        const response = await fetch('/bass.json')
        if (!response.ok) throw new Error('Failed to fetch basses data')
        this.basses = await response.json()
      } catch (error) {
        console.error('Error fetching basses data:', error)
      }
    },
    previousImage() {
      if (this.selectedBassIndex > 0) {
        this.selectedBassIndex--
      }
    },
    nextImage() {
      if (this.selectedBassIndex < this.basses.length - 1) {
        this.selectedBassIndex++
      }
    },
  },
}
</script>

<style scoped>
.page-header {
  height: 40vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: url(/images/8.jpg);
}

.page-header h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  height: 100%;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.tabs button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tabs button.is-active,
.tabs button:hover {
  background-color: var(--link);
}

.product-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 2rem;
}

.image-slider {
  position: relative;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
}

.prev-btn {
  left: -1rem;
}

.next-btn {
  right: -1rem;
}

.bass-image {
  display: block;
  width: 40vw;
  height: auto;
}

.description {
  width: 50vw;
  color: #212121;
}

.description h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.description p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
