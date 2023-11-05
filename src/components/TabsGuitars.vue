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
      <el-col class="col">
        <div
          class="guitar_card"
          v-for="(item, index) in guitarsData"
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

    return { currentDate, guitarsData, guitars_custom_Data, baseUrl }
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

.tab_content {
  border-radius: 5px;
  width: 100vw;
  height: fit-content;
  padding-top: 1rem;
}

:deep .el-tabs__header.el-tabs__header {
  margin: 0 !important;
  height: 10vh;
  width: 100%;
}

p {
  text-align: justify;
  padding: 1rem;
  font-size: 20px;
  color: #212121;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.guitar_card {
  width: 80vw;
  height: fit-content;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1rem;
}

.guitar_card h3 {
  font-size: 35px;
  color: #212121;
}

.guitar_card-img {
  max-width: 60vw;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
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
</style>
