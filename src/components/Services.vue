<template>
  <div>
    <!-- Services Header -->
    <div class="page-header">
      <h1>Servizi</h1>
    </div>

    <!-- Content Rows -->
    <div>
      <div
        class="content-row"
        v-for="(service, index) in services"
        :key="index"
      >
        <!-- Text Section -->
        <div class="text-section">
          <h2
            :style="{
              color: service.title_text_color,
              background: service.title_background_color,
            }"
          >
            {{ service.title }}
          </h2>
          <p
            :style="{
              color: service.text_color,
              background: service.background_color,
            }"
          >
            {{ service.content }}
          </p>
          <ul
            v-if="service.list"
            :style="{
              color: service.text_color,
              background: service.background_color,
            }"
          >
            <li v-for="(item, i) in service.list.split('|')" :key="'list-' + i">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Image Section -->
        <div class="image">
          <img :src="service.image_path" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [],
      isLoading: true,
    }
  },
  methods: {
    async fetchServices() {
      try {
        const response = await fetch('/services.json')
        if (!response.ok) throw new Error('Failed to fetch services data')
        this.services = await response.json()
        this.isLoading = false
      } catch (error) {
        console.error('An error occurred while fetching services data:', error)
      }
    },
  },
  mounted() {
    this.fetchServices()
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

.content-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}

.content-row:nth-child(even) {
  flex-direction: row-reverse;
}

.image,
.text-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 3rem;
}
.text-section ul {
  list-style-type: none;
  text-align: left;
  margin-top: 1rem;
}

.image {
  flex: 1;
  text-align: center;
  padding: 1rem;
}

.image img {
  width: 40vw;
  max-width: 100%;
}

.text-section h2 {
  text-align: center;
  border-bottom: 3px solid var(--link);
  width: 50%;
  margin-bottom: 2rem;
}

.text-section p {
  font-size: 20px;
  text-align: justify;
  line-height: 1.3;
}

ul {
  list-style-type: none;
  text-align: center;
}
</style>
