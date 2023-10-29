<template>
  <div class="header">
    <h1>Contatti</h1>
  </div>
  <div class="contact-page">
    <!-- Map Section -->
    <div class="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11274.746178430345!2d7.3492839!3d45.0515824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880338acc2c6fd47%3A0xb1bf6a64e486ee35!2sMoth%20Lutherie!5e0!3m2!1sen!2sit!4v1695811645585!5m2!1sen!2sit"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Contact Information -->
    <div class="contact-info">
      <h2>Informazioni di Contatto</h2>
      <br />
      <p>
        Indirizzo: Via Monte Robinet 25, <br />
        10094 Giaveno TO, Italia <br />
        Telefono: <a href="tel:+390612345678">+39 06 12345678</a><br />

        Email:
        <a href=" mailto:mothlutherie@gmail.com">mothlutherie@gmail.com</a>
      </p>
    </div>

    <!-- Contact Form -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      alert('Messaggio inviato con successo!')
      // handle form submission here
    },
  },
}
</script>

<style scoped>
.contact-page {
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 1rem;
}
.map-section,
.contact-info,
.contact-form {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  color: #212121;
}

.map-section iframe {
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5), 0 10px 6px rgba(0, 0, 0, 0.16);
}

.contact-info {
  font-size: 25px;
}

.header {
  width: 100vw;
  height: 90vh;
  margin-bottom: 4rem;
  font-size: 60px;
  text-align: center;
  background: url('/images/8.jpg') no-repeat center center / cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.5), 0 30px 46px rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 1;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.header h1 {
  border: 2px solid white;
  border-radius: 5px;
  padding: 1rem;
  z-index: 2;
}

a {
  text-decoration: none;
  color: #212121;
}

a:hover {
  cursor: pointer;
  color: #262166;
}
</style>
