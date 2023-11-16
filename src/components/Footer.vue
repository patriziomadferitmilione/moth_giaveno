<template>
  <footer class="footer">
    <div class="logo-container">
      <router-link to="/">
        <img class="logo" src="/images/logo_beige.png" alt="logo" />
      </router-link>
    </div>

    <div class="footer-info">
      <div class="footer-section">
        <w-icon class="footer-icon" size="3rem" color="black"
          >mdi mdi-clock-outline</w-icon
        >
        <div class="footer-text">
          <p>Mon - Thu: 11.00 - 23.00</p>
          <p>Sat: 12.00 - 23.00</p>
          <p>Sun: 12.00 - 21.00</p>
        </div>
      </div>

      <div class="footer-section">
        <w-icon class="footer-icon" size="3rem" color="black"
          >mdi mdi-phone</w-icon
        >
        <p>+34 1245 88 78</p>
      </div>

      <div class="footer-section">
        <w-icon class="footer-icon" size="3rem" color="black"
          >mdi mdi-map-marker</w-icon
        >
        <div class="footer-text">
          <p>36 East York Street</p>
          <p>Melbourne, Victoria, Australia</p>
        </div>
      </div>
    </div>
  </footer>
  <footer class="footer2">
    <div class="logo-container">
      <router-link to="/">
        <img class="logo" src="/images/logo_beige.png" alt="logo" />
      </router-link>
    </div>

    <div class="footer-info">
      <div class="footer-section">
        <w-icon class="footer-icon" size="3rem" color="black"
          >mdi mdi-clock-outline</w-icon
        >
        <div class="footer-text">
          <p>Mon - Thu: 11.00 - 23.00</p>
          <p>Sat: 12.00 - 23.00</p>
          <p>Sun: 12.00 - 21.00</p>
        </div>
      </div>

      <div class="footer-section">
        <w-icon class="footer-icon" size="3rem" color="black"
          >mdi mdi-phone</w-icon
        >
        <p>+34 1245 88 78</p>
      </div>

      <div class="footer-section">
        <w-icon class="footer-icon" size="3rem" color="black"
          >mdi mdi-map-marker</w-icon
        >
        <div class="footer-text">
          <p>36 East York Street</p>
          <p>Melbourne, Victoria, Australia</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
<style scoped>
.footer {
  background-color: var(--link);
  color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}
.footer2 {
  background-color: var(--link_light);
  color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.logo-container {
  margin-right: 2em; /* Adds right margin to separate from footer sections */
}

.logo {
  max-height: 100px;
}

.footer-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0.5em 0;
}

.footer-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.footer-text p {
  margin: 0.25em 0;
}

p {
  font-size: 1em;
  line-height: 1.5;
}

.footer-info {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: baseline;
  margin-top: 1rem;
}
</style>
