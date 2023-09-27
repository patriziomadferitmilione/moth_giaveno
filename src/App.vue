<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar id="navbar" />
  <router-view id="tabs" />
</template>

<style scoped>
template {
  background-color: var(--white);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#navbar {
  width: 100%;
}

#tabs {
  width: 100%;
}
</style>
