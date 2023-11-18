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
        <!-- Main Row for Title, Content, and Image -->
        <div class="main-row">
          <div class="image" :class="{ 'image-left': index % 2 === 0 }">
            <!-- Add your image here -->
            <img :src="service.image_path" alt="Image" />
          </div>
          <div class="text">
            <!-- Populate content from the data -->
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
          </div>
        </div>

        <!-- List Row -->
        <div class="list-row">
          <ul
            v-if="service.list"
            :style="{
              color: service.text_color,
              background: service.background_color,
            }"
          >
            <!-- Split and create list items if service.list is defined -->
            <li v-for="(item, i) in service.list.split('|')" :key="'list-' + i">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [], // Initialize an empty array for services data
      isLoading: true, // Add a loading indicator flag
    }
  },
  methods: {
    async fetchServices() {
      try {
        const response = await fetch('/services.json') // Adjust the path to your JSON file
        if (!response.ok) throw new Error('Failed to fetch services data')
        this.services = await response.json()
        this.isLoading = false // Set isLoading to false when data is loaded
      } catch (error) {
        console.error('An error occurred while fetching services data:', error)
      }
    },
  },
  mounted() {
    this.fetchServices() // Call the function when the component is mounted
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
  flex-direction: column; /* Change to column layout */
  align-items: center;
  margin-bottom: 2rem;
}

/* Style for the main row containing title, content, and image */
.main-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

.image {
  flex: 1;
  padding: 1rem;
  border: 3px solid var(--link);
  background-color: var(--white);
  text-align: center;
}

.image img {
  max-width: 100%;
}

.image-left {
  order: 1;
}

.text {
  flex: 1;
  padding: 1rem;
  background-color: var(--white);
  border: 3px solid var(--link);
}

.text h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.text p {
  font-size: 22px;
}

/* Style for the list row */
.list-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

ul li {
  font-size: 18px;
}
</style>
