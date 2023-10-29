<template>
  <div class="container">
    <!-- Services Header -->
    <div class="header">
      <h1>Servizi</h1>
    </div>

    <!-- Services Accordion -->
    <w-accordion
      class="accordion"
      :items="services"
      item-content-key="content"
      item-title-key="title"
      :model-value="expandedStates"
      @input="updateExpandedStates"
      @focus="handleFocus"
      :expand-icon="false"
      shadow
      duration="650"
    >
      <!-- Custom content for all items -->
      <template #item-content="{ item, index, expanded }">
        <div
          class="acc_item"
          :class="{ 'is-expanded': expanded }"
          :style="{
            color: item.text_color,
            backgroundColor: item.background_color,
          }"
        >
          <img
            v-if="item.image_path"
            :src="item.image_path"
            alt="Content Image"
          />
          <p>{{ item.content }}</p>
        </div>
      </template>

      <!-- Custom title for all items -->
      <template #item-title="{ item, index, expanded }">
        <div class="acc_title">
          <span
            :class="{ 'is-expanded': expanded }"
            :style="{
              color: item.title_text_color,
              backgroundColor: item.title_background_color,
              textAlign: 'center',
              padding: '1rem',
              borderRadius: '5px',
              boxShadow:
                '0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23)',
              fontWeight: 'bold',
              fontSize: '30px',
              width: '40vw',
            }"
          >
            {{ item.title }}
          </span>
        </div>
      </template>
    </w-accordion>

    <!-- Services Cards -->
    <div class="service-card-grid">
      <div
        class="service-card"
        v-for="(item, index) in services"
        :key="index"
        @click="handleCardClick(item)"
      >
        <!-- <img
          v-if="item.image_path"
          :src="item.image_path"
          alt="Content Image"
          class="service-card-img"
        /> -->
        <w-icon class="mr1" size="17em" color="black"> {{ item.icon }} </w-icon>
        <h3>{{ item.title }}</h3>
      </div>

      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal" @click.stop>
          <button @click="closeModal" class="modal-close">X</button>
          <div class="modal-content">
            <img
              v-if="modalItem.image_path"
              :src="modalItem.image_path"
              alt="Content Image"
            />
            <div class="modal_right">
              <h2>{{ modalItem.title }}</h2>
              <p>{{ modalItem.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ServicesDisplay',
  setup() {
    const services = ref([])
    const expandedStates = ref([false, false])
    const showModal = ref(false)
    const modalContent = ref('')
    const modalItem = ref({})

    // Fetching JSON data when component is mounted
    onMounted(async () => {
      const res = await fetch('/services.json')
      const data = await res.json()

      // Update the content of each service to include a new line after every dot
      for (let service of data) {
        service.content = service.content.replace(/\. /g, '.\n')
      }

      services.value = data
    })

    const extraAction1 = () => {
      console.log('Extra action for the first item performed.')
    }

    const updateExpandedStates = (newState) => {
      if (newState.length !== expandedStates.value.length) {
        expandedStates.value = Array(services.value.length).fill(false)
      }
      expandedStates.value = newState
    }

    const handleFocus = (focusedItem) => {
      // console.log('Focused item:', focusedItem)
    }

    const handleCardClick = (item) => {
      showModal.value = true
      modalItem.value = item
    }

    const closeModal = () => {
      showModal.value = false
    }

    return {
      services,
      expandedStates,
      extraAction1,
      updateExpandedStates,
      handleFocus,
      showModal,
      modalContent,
      handleCardClick,
      closeModal,
      modalItem,
    }
  },
}
</script>

<style scoped>
.container {
  background-color: var(--white);
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.45) inset;
  padding-bottom: 3rem;
}

p {
  text-align: justify;
  padding: 1rem;
  font-size: 20px;
}

.accordion {
  padding: 1rem;
  border-radius: 5px;
  width: 90%;
}

.acc_title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
}

.acc_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 1rem;
  border-radius: 5px;
}

.acc_item img {
  max-width: 50%;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) inset;
}

.acc_item p {
  font-size: 20px;
  padding: 2rem;
  text-align: justify;
}

.header {
  width: 100vw;
  height: 100vh;
  margin-bottom: 4rem;
  font-size: 60px;
  text-align: center;
  background: url('/images/6.jpg') no-repeat center center / cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5), 0 10px 6px rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 1;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.header h1 {
  border: 2px solid white;
  border-radius: 5px;
  padding: 1rem;
  z-index: 2;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 3%;
  right: 1%;
  cursor: pointer;
  font-size: 20px;
  color: var(--red);
  background-color: transparent;
  border: 2px solid var(--red);
  padding: 0.3rem;
  border-radius: 5px;
  font-weight: bold;
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  padding: 1rem;
  text-align: center;
}

.modal-content img {
  max-width: 40%;
  margin-right: 1rem;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
}

.modal-content p {
  margin-top: 1rem;
}

.service-card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
}

.service-card {
  width: 30vw;
  height: 70vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.service-card h3 {
  font-size: 35px;
  color: #212121;
}

.service-card:hover {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.service-card-img {
  max-width: 100%;
  height: auto;
}
</style>
