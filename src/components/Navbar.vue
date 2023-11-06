<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    active-text-color="#c3934c"
    @select="handleSelect"
  >
    <!-- This flex-grow is only necessary if ellipsis is true for smaller screens -->
    <div v-if="ellipsis" class="flex-grow"></div>

    <router-link to="/">
      <el-menu-item class="logo" index="0">
        <img src="/images/logo_beige.png" alt="logo" />
      </el-menu-item>
    </router-link>

    <!-- This flex-grow is to center the logo when ellipsis is not shown -->
    <div v-if="!ellipsis" class="flex-grow"></div>

    <!-- Ellipsis menu for smaller screens -->
    <el-sub-menu v-if="ellipsis" index="10">
      <template #title>
        <span>...</span>
      </template>
      <router-link to="/about">
        <el-menu-item index="1">About</el-menu-item>
      </router-link>
      <el-sub-menu index="2">
        <template #title>Instruments</template>
        <router-link to="/guitars">
          <el-menu-item index="2-1">Guitars</el-menu-item>
        </router-link>
        <router-link to="/guitars2">
          <el-menu-item index="2-1">Guitars</el-menu-item>
        </router-link>
        <router-link to="/bass">
          <el-menu-item index="2-2">Bass</el-menu-item>
        </router-link>
      </el-sub-menu>
      <router-link to="/services">
        <el-menu-item index="3">Services</el-menu-item>
      </router-link>
      <router-link to="/services2">
        <el-menu-item index="3">Services2</el-menu-item>
      </router-link>
      <router-link to="/contacts">
        <el-menu-item index="4">Contacts</el-menu-item>
      </router-link>
      <el-menu-item index="5">Configuratore</el-menu-item>
    </el-sub-menu>

    <!-- Normal links for larger screens -->
    <template v-if="!ellipsis">
      <router-link to="/about">
        <el-menu-item index="1">About</el-menu-item>
      </router-link>
      <el-sub-menu index="2">
        <template #title>Instruments</template>
        <router-link to="/guitars">
          <el-menu-item index="2-1">Guitars</el-menu-item>
        </router-link>
        <router-link to="/guitars2">
          <el-menu-item index="2-1">Guitars</el-menu-item>
        </router-link>
        <router-link to="/bass">
          <el-menu-item index="2-2">Bass</el-menu-item>
        </router-link>
      </el-sub-menu>
      <router-link to="/services">
        <el-menu-item index="3">Services</el-menu-item>
      </router-link>
      <router-link to="/services2">
        <el-menu-item index="3">Services2</el-menu-item>
      </router-link>
      <router-link to="/contacts">
        <el-menu-item index="4">Contacts</el-menu-item>
      </router-link>
    </template>
  </el-menu>
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
#navbar {
  border: none;
}

.el-menu {
  position: sticky;
  top: 0;
  z-index: 100;
}

.flex-grow {
  flex-grow: 1;
}

img {
  max-height: 100%;
}

/*
.el-menu {
}

.el-menu--horizontal {
}

#navbar {
}

.flex-grow {
}

.el-menu-item {
}

.logo {
}

img {
}

.el-sub-menu {
}

.el-sub-menu__hide-arrow {
}

.el-sub-menu__title {
}

.el-tooltip__trigger {
}

.el-icon {
}

.el-sub-menu__icon-more {
}

.el-sub-menu__icon-arrow {
  
} */
</style>
