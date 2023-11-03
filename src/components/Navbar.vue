<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    active-text-color="#ffd04b"
    @select="handleSelect"
    :ellipsis="ellipsis"
  >
    <router-link to="/">
      <el-menu-item class="logo" index="0">
        <img src="/images/logo.png" alt="logo" />
      </el-menu-item>
    </router-link>
    <div class="flex-grow" />
    <router-link to="/about">
      <el-menu-item index="1">About</el-menu-item>
    </router-link>
    <el-sub-menu index="2">
      <template #title>Instruments</template>
      <router-link to="/guitars">
        <el-menu-item index="2-1">Guitars</el-menu-item>
      </router-link>
      <router-link to="/bass">
        <el-menu-item index="2-2">Bass</el-menu-item>
      </router-link>
      <!-- <el-menu-item index="2-3">Custom</el-menu-item> -->
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

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      ellipsis: false,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
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
</style>
