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
        <span class="navbar_titles">ABOUT ME</span>
      </router-link>

      <!-- Dropdown for Instruments -->
      <div class="dropdown">
        <span class="navbar_titles dropdown-toggle">INSTRUMENTS</span>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/guitars">GUITARS</router-link>
          <router-link class="dropdown-item" to="/bass">BASS</router-link>
        </div>
      </div>

      <!-- Other Links -->
      <router-link class="r_link" to="/services">
        <span class="navbar_titles">SERVICES</span>
      </router-link>
      <router-link class="r_link" to="/stock">
        <span class="navbar_titles">STOCK</span>
      </router-link>
      <router-link class="r_link" to="/contacts">
        <span class="navbar_titles">CONTACTS</span>
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
  flex-direction: row; /* Always use row direction */
  align-items: center; /* Center items vertically */
  transition: height 0.8s ease;
  height: 8vh; /* Set a default height */
}

.navbar.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--white) !important;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.logo-container {
  margin-right: 1rem; /* Add some space after the logo */
}

.logo {
  max-height: 8vh;
}

.nav-links a,
.nav-links span {
  text-decoration: none;
  color: var(--white); /* Default color */
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
  background-color: transparent;
  z-index: 1;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: none;
  padding-top: 0.5rem;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  color: black;
  text-decoration: none;
  display: block;
  padding: 1rem;
  margin: 0;
  width: 100%;
}

.dropdown-item:hover {
  background-color: var(--white);
}
</style>
