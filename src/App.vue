<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar id="navbar" />
  <router-view id="view" />
</template>

<style scoped>
#navbar {
  width: 100%;
}

#view {
  width: 100%;
}
</style>
