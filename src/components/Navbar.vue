<template>
  <w-toolbar class="navbar" fixed shadow height="8vh">
    <!-- Logo -->
    <router-link to="/">
      <img class="logo" src="/images/logo_beige.png" alt="logo" />
    </router-link>

    <div class="spacer"></div>

    <!-- Main navigation links -->
    <router-link class="r_link" to="/about" active-class="active-link">
      <span class="navbar_titles">About</span>
    </router-link>

    <!-- Dropdown for Instruments -->
    <div class="dropdown">
      <span class="navbar_titles dropdown-toggle">Instruments</span>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/guitars">Guitars</router-link>
        <router-link class="dropdown-item" to="/bass">Bass</router-link>
      </div>
    </div>

    <!-- Other Links -->
    <router-link class="r_link" to="/services2">
      <span class="navbar_titles">Services</span>
    </router-link>
    <router-link class="r_link" to="/contacts">
      <span class="navbar_titles">Contacts</span>
    </router-link>

    <!-- Configuratore -->
    <span class="navbar_titles">Configuratore</span>
  </w-toolbar>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      ellipsis: false,
      resizeTimer: null,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    updateEllipsis() {
      console.log('Update Ellipsis Triggered')
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.ellipsis = window.innerWidth <= 480
        console.log('Ellipsis value:', this.ellipsis)
      }, 250)
    },
  },
  mounted() {
    this.ellipsis = window.innerWidth <= 480
    window.addEventListener('resize', this.updateEllipsis)
  },
  watch: {
    ellipsis(newVal) {
      console.log('Ellipsis changed to:', newVal)
    },
  },
}
</script>

<style scoped>
.navbar {
  border: none;
  background-color: var(--white);
}

a,
span {
  text-decoration: none;
  color: black;
  font-weight: 600;
  margin-right: 1rem;
  cursor: pointer;
}

a:hover {
  color: var(--link);
}

.logo {
  max-height: 8vh;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: var(--white);
  z-index: 1;
  border-radius: 5px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  color: black;
  text-decoration: none;
  display: block;
  padding: 1rem;
}

.dropdown-item:hover {
  background-color: var(--white);
}
</style>
