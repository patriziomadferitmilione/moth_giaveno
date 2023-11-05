<template>
  <el-tabs
    type="border-card"
    class="tabs"
    stretch
    tab-position="top"
    :before-leave="beforeTabLeave"
    @tab-click="handleTabClick"
    @tab-change="handleTabChange"
  >
    <el-tab-pane class="tab_content">
      <template #label>
        <span class="custom-tabs-label">
          <!-- <el-icon><calendar /></el-icon> -->
          <span>Original</span>
        </span>
      </template>
      <div class="container"></div>

      <w-accordion
        class="accordion"
        :items="guitarsData"
        item-content-key="content"
        item-title-key="title"
        :model-value="expandedStates"
        @input="updateExpandedStates"
        @focus="handleFocus"
        :expand-icon="false"
        duration="650"
      >
        <!-- Custom title for all items -->
        <template #item-title="{ item, index, expanded }">
          <div class="acc_title">
            <span
              :class="{ 'is-expanded': expanded }"
              :style="{
                color: 'transparent',
                backgroundColor: 'transparent',
                textAlign: 'center',
                padding: '1rem',
                borderRadius: '5px',
                fontWeight: 'bold',
                fontSize: '30px',
                width: '70vw',
              }"
            >
              {{ item.name }}
            </span>
          </div>
        </template>

        <!-- Custom content for all items -->
        <template #item-content="{ item, index, expanded }">
          <div
            ref="listElement"
            class="acc_item"
            :class="{ 'is-expanded': expanded }"
          >
            <img
              v-if="item.image_path"
              :src="item.image_path"
              alt="Content Image"
            />
            <p class="content_overlay">{{ item.description }}</p>
          </div>
        </template>
      </w-accordion>
    </el-tab-pane>
    <el-tab-pane class="tab_content">
      <template #label>
        <span class="custom-tabs-label">
          <!-- <el-icon><calendar /></el-icon> -->
          <span>Custom</span>
        </span>
      </template>
      <el-col class="col">
        <div
          class="guitar_card"
          v-for="(item, index) in guitars_custom_Data"
          :key="index"
        >
          <img
            :src="item.image_path"
            alt="Guitar Image"
            class="guitar_card-img"
          />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </el-col>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'TabsGuitars',
  setup() {
    const currentDate = ref(new Date())
    const guitarsData = ref([])
    const guitars_custom_Data = ref([])
    const baseUrl = 'https://antoniandre.github.io/wave-ui/'

    const expandedStates = ref([true, true])

    onMounted(async () => {
      try {
        const response = await fetch('/guitars.json')
        if (response.ok) {
          const data = await response.json()
          guitarsData.value = data
        } else {
          console.error('Failed to fetch guitars.json')
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
      try {
        const response = await fetch('/guitars_custom.json')
        if (response.ok) {
          const data = await response.json()
          guitars_custom_Data.value = data
        } else {
          console.error('Failed to fetch guitars.json')
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
    })

    return {
      currentDate,
      guitarsData,
      guitars_custom_Data,
      baseUrl,
      expandedStates,
    }
  },
}
</script>
<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  background-image: url('images/logo_beige.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  height: 100vh;
  width: 100vw;
  opacity: 0.249;
}

.tab_content {
  border-radius: 5px;
  width: 100vw;
}

:deep .el-tabs__header.el-tabs__header {
  margin: 0 !important;
  width: 100%;
}

p {
  text-align: justify;
  padding: 1rem;
  font-size: 20px;
  color: #212121;
}

:deep(.el-tabs__item.is-active) {
  background-color: var(--white) !important;
  color: var(--link) !important;
}

:deep(.el-tabs__item) {
  color: black;
}

:deep(.el-tabs__item:hover) {
  color: black !important;
}

.accordion {
  padding: 1rem;
  width: 100vw !important;
  background-color: none !important;
  box-shadow: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content !important;
  margin-bottom: 5rem;
  text-align: center;
  position: absolute;
  top: 0;
}

.acc_title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  text-align: center;
  width: 100vw;
}

.acc_title:last-of-type {
  margin-top: 5rem;
}

.acc_item {
  min-height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  padding: 0;
  background-color: transparent !important;
}

.content_overlay {
  color: #212121;
  line-height: 1.2;
  letter-spacing: 0.11rem;
  text-align: center;
  z-index: 3;
  background-color: rgba(195, 147, 76, 0.7) !important;
  width: 70%;
  height: fit-content !important;
}

.acc_item img {
  width: 80vw;
  height: auto;
  z-index: 2;
}

.acc_item p {
  font-size: 23px;
  height: fit-content;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  width: 80vw;
}

.acc_title span {
  color: var(--shadow2) !important;
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>
