<template>
  <div class="container">
    <!-- Guitars Header -->
    <div class="page-header">
      <h1>Guitars</h1>
    </div>

    <!-- Product Container -->
    <div class="product-container" v-if="guitars.length > 0">
      <!-- Tabs -->
      <div class="tabs">
        <button
          v-for="(guitar, index) in guitars"
          :key="guitar.name"
          @click="selectedGuitarIndex = index"
          :class="{ 'is-active': selectedGuitarIndex === index }"
        >
          {{ guitar.name }}
        </button>
      </div>

      <!-- Product Details -->
      <div class="product-details">
        <div class="image-slider">
          <button @click="previousImage" class="slider-btn prev-btn">‹</button>
          <img
            :src="guitars[selectedGuitarIndex].image_path"
            :alt="guitars[selectedGuitarIndex].name"
            class="guitar-image"
          />
          <button @click="nextImage" class="slider-btn next-btn">›</button>
        </div>
        <div class="description">
          <h2>{{ guitars[selectedGuitarIndex].name }}</h2>
          <p>{{ guitars[selectedGuitarIndex].description }}</p>
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
      guitars: [],
      selectedGuitarIndex: 0,
    }
  },
  mounted() {
    this.fetchGuitars()
  },
  methods: {
    async fetchGuitars() {
      try {
        const response = await fetch('/guitars.json')
        if (!response.ok) throw new Error('Failed to fetch guitars data')
        this.guitars = await response.json()
      } catch (error) {
        console.error('Error fetching guitars data:', error)
      }
    },
    previousImage() {
      if (this.selectedGuitarIndex > 0) {
        this.selectedGuitarIndex--
      }
    },
    nextImage() {
      if (this.selectedGuitarIndex < this.guitars.length - 1) {
        this.selectedGuitarIndex++
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
  margin-bottom: 2rem;
  margin-top: 2rem;
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

.guitar-image {
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
