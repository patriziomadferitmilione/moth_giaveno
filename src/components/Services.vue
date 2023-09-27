<template>
  <div class="container">
    <!-- Accordion Display -->
    <div class="display-section">
      <el-header>
        <h2>Servizi - Accordion</h2>
      </el-header>
      <el-main>
        <el-collapse class="main" v-model="activeNames">
          <el-collapse-item
            class="acc_item"
            v-for="(service, index) in services"
            :title="service.title"
            :name="index"
            :key="index"
          >
            {{ service.description }}
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </div>

    <!-- Table Display -->
    <div class="display-section">
      <el-header>
        <h2>Servizi - Tabella</h2>
      </el-header>
      <el-main>
        <el-table :data="services">
          <el-table-column
            property="title"
            label="Servizio"
            width="180"
          ></el-table-column>
          <el-table-column
            property="description"
            label="Descrizione"
          ></el-table-column>
        </el-table>
      </el-main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesDisplay',
  data() {
    return {
      services: [
        {
          title: 'Restauro',
          description:
            'Riportiamo alla vita il tuo strumento antico, rispettando la sua anima e la sua storia.',
        },
        {
          title: 'Regolazione',
          description:
            'Ajustiamo il tuo strumento per garantirti una suonabilità ottimale e un comfort di suonato unico.',
        },
        {
          title: 'Pulizia Profonda',
          description:
            'Effettuiamo una pulizia profonda per far risplendere il tuo strumento come nuovo.',
        },
        {
          title: 'Customizzazione',
          description:
            'Modifichiamo il tuo strumento secondo le tue esigenze, rendendolo unico e personale.',
        },
        {
          title: 'Manutenzione',
          description:
            'Offriamo servizi di manutenzione ordinaria per preservare la bellezza e la funzionalità del tuo strumento.',
        },
        {
          title: 'Riparazioni',
          description:
            'Ripariamo danni e malfunzionamenti, restituendo al tuo strumento la sua voce originale.',
        },
        {
          title: 'Revisione',
          description:
            'Effettuiamo una revisione completa per assicurarti un suono e una resa al top.',
        },
        {
          title: 'Verniciatura',
          description:
            'Riverniciamo il tuo strumento, proteggendolo e valorizzando la sua estetica.',
        },
        {
          title: 'Montaggio',
          description:
            'Assemblaggio accurato di parti e accessori, per un risultato impeccabile e duraturo.',
        },
        {
          title: 'Consulenza',
          description:
            'Ti forniamo consulenza su manutenzione, acquisti e vendite, per aiutarti a fare sempre la scelta giusta.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  background-color: var(--white);
}

.main {
  text-align: center;
}

.acc_item {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.display-section {
  margin-bottom: 20px;
}
</style>
