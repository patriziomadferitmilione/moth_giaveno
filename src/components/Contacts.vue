<template>
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
      <p>
        Indirizzo: Via Monte Robinet, 25, 10094 Giaveno TO, Italia <br />
        Telefono: +39 06 12345678 <br />
        Email: info@liutaio.it
      </p>
    </div>

    <!-- Contact Form -->
    <!-- <div class="contact-form">
      <h2>Contattaci</h2>
      <el-form :model="form" @submit.native.prevent="handleSubmit">
        <el-input v-model="form.name" placeholder="Il tuo nome"></el-input>
        <el-input v-model="form.email" placeholder="La tua email"></el-input>
        <el-input
          type="textarea"
          v-model="form.message"
          placeholder="Il tuo messaggio"
        ></el-input>
        <el-button type="primary" @click="handleSubmit">Invia</el-button>
      </el-form>
    </div> -->
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
  flex-direction: column;
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
}
</style>
