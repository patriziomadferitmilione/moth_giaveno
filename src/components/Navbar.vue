<template>
  <w-toolbar
    :class="['navbar', { sticky: isSticky }]"
    fixed
    :style="{ height: isSticky ? '8vh' : '15vh' }"
  >
    <div class="logo-container">
      <router-link to="/">
        <img
          class="logo"
          :class="{ 'sticky-logo': isSticky }"
          src="/images/logo_beige.png"
          alt="logo"
        />
      </router-link>
    </div>
    <div v-if="isSticky" class="spacer"></div>

    <div class="spacer"></div>

    <div class="nav-links" :class="{ 'sticky-links': isSticky }">
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
    </div>
  </w-toolbar>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
    }
  },
  methods: {
    handleScroll() {
      const header = document.querySelector('.page-header')
      if (!header) {
        console.warn(
          'Header element not found. Ensure your header has the correct class.'
        )
        return
      }

      const headerHeight = header.offsetHeight

      this.isSticky = window.scrollY > headerHeight
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
.navbar {
  border: none !important;
  background-color: transparent !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: height 0.8s ease;
}

.navbar.sticky {
  position: fixed;
  color: #212121;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--white) !important;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  flex-direction: row;
  justify-content: start;
}

.logo-container {
  text-align: center; /* Center the logo */
}

.nav-links a,
.nav-links span {
  color: var(--white); /* Default color for non-sticky state */
}

.sticky-links a,
.sticky-links span {
  color: #212121; /* Color for sticky state */
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
