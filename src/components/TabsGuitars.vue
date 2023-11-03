<template>
  <div class="header">
    <h1>Chitarre</h1>
  </div>
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
  border: 2px solid var(--link);
  border-radius: 5px;
  color: var(--link);
  padding: 1rem;
  z-index: 2;
}

.tab_content,
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
  padding: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  width: 100%;
}

:deep .el-tabs__nav {
  background: var(--white);
}

:deep .el-tabs__item {
  color: #212121;
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
  width: 90vw;
  height: fit-content;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) inset;
  transition: box-shadow 0.3s ease;
  margin-bottom: 1rem;
}

.guitar_card h3 {
  font-size: 35px;
  color: #212121;
}

.guitar_card:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11) inset;
  transition: box-shadow 0.3s ease;
}

.guitar_card-img {
  max-width: 60vw;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
}

/* Style the active tab */
:deep(.el-tabs__item.is-active) {
  background-color: var(--white) !important;
  color: var(--link) !important;
}

/* Style all the tabs */
:deep(.el-tabs__item) {
  background-color: #212121;
  color: black;
}

/* Style hover effect */
:deep(.el-tabs__item:hover) {
  background-color: lightgrey !important;
  color: var(--link) !important;
}
</style>
