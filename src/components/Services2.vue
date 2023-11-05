<template>
  <!-- Services Accordion -->
  <div class="container"></div>
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
            fontWeight: 'bold',
            fontSize: '30px',
            width: '70vw',
          }"
        >
          {{ item.title }}
        </span>
      </div>
    </template>

    <!-- Custom content for all items -->
    <template #item-content="{ item, index, expanded }">
      <div
        ref="listElement"
        class="acc_item"
        :class="{ 'is-expanded': expanded }"
        :style="{
          color: item.text_color,
          backgroundColor: item.background_color,
        }"
      >
        <div class="img_content_wrapper">
          <img
            v-if="item.image_path"
            :src="item.image_path"
            alt="Content Image"
          />
          <p class="content_overlay">{{ item.content }}</p>
        </div>
        <ul v-if="item.list" :class="{ 'list-in-view': listInView }">
          <li v-for="(listItem, index) in item.list.split('|')" :key="index">
            {{ listItem.trim() }}
          </li>
        </ul>
      </div>
    </template>
  </w-accordion>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ServicesDisplay',
  setup() {
    const services = ref([])
    const expandedStates = ref([true, false, false, false, false, false])
    const showModal = ref(false)
    const modalContent = ref('')
    const modalItem = ref({})

    // Fetching JSON data when component is mounted
    const listElement = ref(null)
    const listInView = ref(false)

    onMounted(async () => {
      // Fetching data from services.json and updating its content
      const res = await fetch('/services.json')
      const data = await res.json()

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
        expandedStates.value = Array(services.value.length).fill(true)
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
  background-image: url('../public/images/logo_beige.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  opacity: 0.249;
}

p {
  text-align: justify;
  padding: 1rem;
  font-size: 20px;
}

.accordion {
  padding: 1rem;
  width: 100vw !important;
  background: transparent !important;
  width: fit-content;
  box-shadow: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.acc_title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--shadow3);
  background-color: transparent !important;
  border-radius: 5px;
  width: 100vw;
  border: none !important;
  box-shadow: none !important;
}

.acc_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  height: fit-content;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  padding: 0;
  background-color: transparent !important;
}

.img_content_wrapper {
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
}

.content_overlay {
  height: 60%;
  width: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #212121;
  line-height: 1.2;
  letter-spacing: 0.11rem;
  text-align: center;
  z-index: 3;
  background-color: rgba(195, 147, 76, 0.85) !important;
  border-radius: 5px;
}

.acc_item img {
  border-radius: 5px;
  width: 60vw;
  height: auto;
  z-index: 2;
}

.acc_item p {
  font-size: 23px;
  height: 45%;
  padding: 1rem 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  z-index: 2;
  margin-top: 1rem;
}

.acc_title span {
  background-color: var(--shadow3) !important;
  background-color: transparent !important;
  margin: 10px auto;
  color: var(--shadow2) !important;
  border: none !important;
  box-shadow: none !important;
}

ul {
  list-style-type: none;
  width: 60vw;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(255, 252, 242, 0.85) !important;
}

ul li {
  margin: 10px 0;
  padding: 0 2rem;
  font-size: 20px;
  line-height: 1.3;
  border-radius: 5px;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s, background-color 0.3s, box-shadow 0.3s,
    opacity 0.5s;
  background-color: transparent !important;
}

ul li {
  transform: translateX(-100%);
  opacity: 0;
}

ul li:nth-child(1) {
  animation: fadeInFromLeft 0.5s 0.5s forwards;
}

ul li:nth-child(2) {
  animation: fadeInFromLeft 0.5s 0.7s forwards;
}

ul li:nth-child(3) {
  animation: fadeInFromLeft 0.5s 0.9s forwards;
}

ul li:nth-child(4) {
  animation: fadeInFromLeft 0.5s 0.6s forwards;
}

ul li:nth-child(5) {
  animation: fadeInFromLeft 0.5s 0.8s forwards;
}

ul li:nth-child(6) {
  animation: fadeInFromLeft 0.5s 1s forwards;
}

ul li:nth-child(7) {
  animation: fadeInFromLeft 0.5s 0.7s forwards;
}

ul li:nth-child(8) {
  animation: fadeInFromLeft 0.5s 0.8s forwards;
}

ul li:nth-child(9) {
  animation: fadeInFromLeft 0.5s 1.1s forwards;
}

ul li:nth-child(10) {
  animation: fadeInFromLeft 0.5s 0.9s forwards;
}

ul li:nth-child(11) {
  animation: fadeInFromLeft 0.5s 1.2s forwards;
}

ul li:nth-child(12) {
  animation: fadeInFromLeft 0.5s 1s forwards;
}

ul li:nth-child(13) {
  animation: fadeInFromLeft 0.5s 1.3s forwards;
}

ul li:nth-child(14) {
  animation: fadeInFromLeft 0.5s 1.5s forwards;
}

@keyframes fadeInFromLeft {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  .accordion {
    width: 95%;
    padding: 0.5rem;
  }

  .acc_item {
    background-image: url('/images/3.png');
    background-size: auto;
    padding: 0;
    height: fit-content !important;
    width: 100vw;
  }

  .img_content_wrapper {
    height: fit-content;
    background-image: url('/images/3.png');
    width: 100%;
    height: 100vh;
  }

  .content_overlay {
    height: fit-content !important;
    width: 90%;
  }

  .acc_item img {
    width: 80vw;
    display: none;
  }

  .acc_item p {
    font-size: 20px;
  }

  .acc_title span {
    padding: 0;
  }

  ul {
    width: 100%;
    padding: 2rem 0;
  }

  ul li {
    font-size: 15px;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .container {
    padding-bottom: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    padding-bottom: 2.5rem;
  }
}

@media (min-width: 1025px) {
  .container {
    padding-bottom: 3rem;
  }
}
</style>
