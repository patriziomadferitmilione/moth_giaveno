<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar id="navbar" />
  <router-view id="view" />
  <Footer id="footer" />
</template>

<style scoped>
#navbar {
  width: 100%;
}

#view {
  width: 100%;
}

#footer {
  width: 100%;
}
</style>
