<template>
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
    const expandedStates = ref([true, true, true, true, true, true])
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
p {
  text-align: justify;
  padding: 1rem;
  font-size: 20px;
}

.accordion {
  padding: 1rem;
  width: 100%;
  padding-bottom: 3rem;
  background-color: var(--white);
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  padding: 0;
}

.img_content_wrapper {
  position: relative;
  width: 70%;
  margin: auto;
}

.content_overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.acc_item img {
  border-radius: 5px;
  width: 100%;
  height: auto;
  z-index: 1;
}

.acc_item p {
  font-size: 30px;
  text-align: justify;
  border-radius: 5px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
}

ul {
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  text-align: center;
}

ul li {
  margin: 10px 0;
  font-size: 20px;
  border-radius: 5px;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s, background-color 0.3s, box-shadow 0.3s,
    opacity 0.5s;
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
  .container {
    padding-bottom: 3rem;
  }

  .accordion {
    padding: 0.5rem;
    width: 95%;
    box-shadow: none;
  }

  .acc_title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    padding: 1rem;
    border-radius: 5px;
  }

  .acc_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 90vw !important;
    padding: 1rem;
    border-radius: 5px;
  }

  .acc_item img {
    max-width: 90%;
  }

  .acc_item p {
    font-size: 20px;
    line-height: 1.4;
    padding: 0.5rem;
    margin: 0;
    max-height: 40vh;
    overflow: scroll;
    margin-top: 1rem;
    width: 80vw; /* Adjusting width for mobile devices to ensure text doesn't overflow */
    overflow: auto;
  }

  .w-accordion__item-title .acc_title span,
  .w-accordion__item-title .acc_title {
    color: rgb(33, 33, 33);
    background-color: var(--white);
    text-align: center;
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 30px;
    width: 90vw;
  }
  .w-accordion__item-title .acc_title span {
    width: 80vw !important;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
