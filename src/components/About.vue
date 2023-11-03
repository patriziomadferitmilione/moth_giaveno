<template>
  <el-container direction="vertical">
    <el-row :gutter="20">
      <el-col :span="24">
        <!-- <el-card shadow="always">
          <h1>Chi Siamo</h1>
          <h2>La tua soddisfazione, il nostro obiettivo</h2>
        </el-card> -->
        <div class="header">
          <h1>Chi Siamo</h1>
          <h2>La tua soddisfazione, il nostro obiettivo</h2>
        </div>
      </el-col>
    </el-row>
    <el-row class="row" :gutter="20">
      <el-col :span="12">
        <el-card>
          <img
            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/359701776_806287521202749_3803197407710466717_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=JH8qPw1KjbEAX_K288P&_nc_ht=scontent-mxp2-1.xx&oh=00_AfCYpWW1L0LFNAK4ZoyttTIhwh0QciI_1InIdrHb5Qa0rA&oe=6519D27A"
            alt="Una immagine rappresentativa"
            style="width: 100%"
          />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <p>
            Benvenuto nel nostro sito web! Siamo una liuteria gestita da un
            giovane liutaio indipendente, impegnato a offrirti il miglior
            servizio possibile.
          </p>
          <p>
            Fondata nel cuore della città, la nostra bottega è stata una scelta
            affidabile per molte persone negli anni. Fin dall'inizio, il nostro
            obiettivo è stato garantire la soddisfazione del cliente, e
            lavoriamo duramente ogni giorno per realizzarlo.
          </p>
          <p>
            Siamo più di un semplice negozio; siamo una famiglia di
            professionisti che mette cuore e anima in tutto ciò che fa. Ogni
            strumento che realizziamo è frutto di passione, dedizione e
            attenzione ai dettagli. Unisciti a noi e diventa parte della nostra
            crescente comunità!
          </p>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.header {
  width: 100vw;
  height: 90vh;
  margin-bottom: 4rem;
  font-size: 60px;
  text-align: center;
  background: url('/images/6.jpg') no-repeat center center / cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.header h1,
.header h2,
.header h3 {
  border-radius: 5px;
  padding: 1rem;
  z-index: 2;
}

h1,
h2 {
  text-align: center;
  margin: 0;
}
h2 {
  color: var(--link);
  font-size: 1.5rem;
  font-weight: normal;
}
p {
  font-size: 1rem;
  line-height: 1.5;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--white);
}

h1 {
  color: var(--white);
}
</style>
