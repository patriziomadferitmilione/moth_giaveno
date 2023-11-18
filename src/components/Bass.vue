<template>
  <div class="header">
    <h1>Bassi</h1>
  </div>
</template>

<script>
export default {
  name: 'Bass',
}
</script>

<style scoped>
.header {
  width: 100vw;
  height: 100vh;
  margin-bottom: 4rem;
  font-size: 60px;
  text-align: center;
  background: url('/images/7.jpg') no-repeat center center / cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5), 0 10px 6px rgba(0, 0, 0, 0.16);
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
  border: 2px solid var(--white);
  border-radius: 5px;
  padding: 1rem;
  z-index: 2;
}
</style>
