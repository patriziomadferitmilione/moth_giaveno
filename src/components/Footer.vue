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
          <p>Mon Wed Thu Fri 9.00 - 18.00</p>
          <p>Tue Sat 9.00 - 13.00</p>
          <p>Sunday closed</p>
        </div>
      </div>

      <div class="footer-section">
        <a href="tel:+393389159716"
          ><w-icon class="footer-icon" size="3rem" color="black"
            >mdi mdi-phone</w-icon
          ></a
        >
        <a href="tel:+393389159716">+39 3389159716</a>
        <a href="mailto:mothlutherie@gmail.com">mothlutherie@gmail.com</a>
      </div>

      <div class="footer-section">
        <a
          href="https://www.google.com/maps/place/Via+Monte+Robinet+25,+10094+Giaveno+TO"
          target="_blank"
        >
          <w-icon class="footer-icon" size="3rem" color="black"
            >mdi mdi-map-marker</w-icon
          >
          <div class="footer-text">
            <p>
              Via Monte Robinet 25, <br />
              10094 Giaveno TO
            </p>
          </div>
        </a>
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
  font-size: 25px;
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
  margin-bottom: 2rem;
}

.logo {
  max-height: 100px;
}

.footer-info {
  display: flex;
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
}

.footer-section {
  min-width: calc(33.333% - 40px);
  margin: 0 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer-text {
  text-align: center;
}

a {
  text-decoration: none;
  color: #212121;
}

a:hover {
  text-decoration: none;
  color: var(--link_light);
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer-section {
    min-width: 50%;
  }
}

@media (max-width: 480px) {
  .footer-section {
    min-width: 100%;
  }
}
</style>
