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
.footer,
.footer2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.footer {
  background-color: var(--link);
  color: #212121;
  font-weight: 600;
}

.footer2 {
  background-color: var(--link_light);
  color: #212121;
}

.logo-container {
  margin-bottom: 2rem; /* Adds bottom margin to separate from footer sections */
}

.logo {
  max-height: 100px;
}

.footer-info {
  display: flex;
  overflow-x: auto; /* Allows horizontal scrolling to see more cards */
  width: 100%; /* Width should be 100% of the parent container */
  max-width: 100%; /* Ensures that footer-info doesn't exceed the width of its parent */
}

.footer-section {
  min-width: calc(33.333% - 40px); /* Sets minimum width for each section */
  margin: 0 20px; /* Adds margin to the sides of each section */
  flex-shrink: 0; /* Prevents the sections from shrinking */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the items vertically */
  justify-content: center; /* Centers the items horizontally */
}

.footer-text {
  text-align: center; /* Centers the text */
}

/* Additional responsive consideration for smaller screens */
@media (max-width: 768px) {
  .footer-section {
    min-width: 50%; /* On smaller screens, show two items at a time */
  }
}

@media (max-width: 480px) {
  .footer-section {
    min-width: 100%; /* On mobile screens, show one item at a time */
  }
}
</style>
