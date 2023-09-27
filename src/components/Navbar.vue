<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    active-text-color="#ffd04b"
    @select="handleSelect"
    :ellipsis="false"
  >
    <router-link to="/">
      <el-menu-item index="0">LOGO</el-menu-item>
    </router-link>
    <div class="flex-grow" />
    <router-link to="/about">
      <el-menu-item index="1">About</el-menu-item>
    </router-link>
    <el-sub-menu index="2">
      <template #title>Instruments</template>
      <router-link to="/guitars">
        <el-menu-item index="2-1">Chitarre</el-menu-item>
      </router-link>
      <el-menu-item index="2-2">Bass</el-menu-item>
      <el-menu-item index="2-3">Custom</el-menu-item>
    </el-sub-menu>
    <router-link to="/services">
      <el-menu-item index="3">Services</el-menu-item>
    </router-link>
    <router-link to="/contacts">
      <el-menu-item index="4">Contacts</el-menu-item>
    </router-link>
    <el-menu-item index="5">Generatore</el-menu-item>
    <el-icon :size="20">
      <Edit />
    </el-icon>
    <el-icon color="#409EFC" class="no-inherit">
      <Share />
    </el-icon>
    <el-icon>
      <Delete />
    </el-icon>
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu {
  position: sticky;
  top: 0;
  z-index: 100;
}

.flex-grow {
  flex-grow: 1;
}
</style>
