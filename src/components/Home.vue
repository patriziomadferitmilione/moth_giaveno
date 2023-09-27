<template>
  <div class="home">
    <!-- Big Picture with Buttons -->
    <div class="image-container">
      <el-image
        class="big-picture"
        src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/330203811_707701327517344_9143285510361982912_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=mL1rsR1-YsUAX_z8PMk&_nc_ht=scontent-mxp2-1.xx&oh=00_AfA7H99m9WW3jzCuhmaF9J1v2ScRfpAfF2dfN5F3X_Cglw&oe=6518C1D6"
        fit="cover"
      ></el-image>
      <div class="overlay">
        <router-link to="/about">
          <el-button type="primary">About Us</el-button>
        </router-link>
        <router-link to="/services">
          <el-button type="success">Our Services</el-button>
        </router-link>
      </div>
    </div>

    <!-- Other content can go here -->
    <div class="content">
      <h1>Welcome to Our Site!</h1>
      <p>Explore our collection and services.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  position: relative;
  background-color: var(--white);
}

.image-container {
  position: relative;
}

.big-picture {
  width: 100%;
  height: 400px; /* You can set this to the height you want */
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  text-align: center;
  padding: 20px;
}
</style>
