<template>
  <el-tabs stretch type="border-card" class="tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <!-- <el-icon><calendar /></el-icon> -->
          <span>Original</span>
        </span>
      </template>

      <el-row class="row">
        <el-card
          class="guitar_card"
          shadow="always"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26944.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Nome Linea Chitarra</span>
            <div class="bottom">
              TESTO DI DESCRIZIONE LINEA : Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta dolorem fugiat nam, officia
              reiciendis distinctio?
            </div>
          </div>
        </el-card>
        <el-card
          class="guitar_card"
          shadow="always"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26944.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Nome Linea Chitarra</span>
            <div class="bottom">
              TESTO DI DESCRIZIONE LINEA : Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta dolorem fugiat nam, officia
              reiciendis distinctio?
            </div>
          </div>
        </el-card>
        <el-card
          class="guitar_card"
          shadow="always"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26944.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Nome Linea Chitarra</span>
            <div class="bottom">
              TESTO DI DESCRIZIONE LINEA : Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta dolorem fugiat nam, officia
              reiciendis distinctio?
            </div>
          </div>
        </el-card>
      </el-row>

      <el-row class="row2">
        <el-card class="guitar_card2" shadow="always">
          <img src="https://cdn-icons-png.flaticon.com/512/26/26944.png" />
        </el-card>
        <el-card class="card_text">
          <p>
            Nome Linea Chitarra <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            assumenda excepturi temporibus ipsam facere consectetur alias
            dignissimos perferendis, rerum ea ipsum veniam. Accusamus numquam a
            excepturi magni velit hic sequi delectus commodi harum repudiandae
            tempora minima cum incidunt, provident laborum asperiores officia
            tempore reprehenderit ad in ea et soluta maxime aliquam? Soluta,
            eligendi! Praesentium, dolore. Eveniet cupiditate ducimus placeat
            rem illum vel dolorem accusantium quisquam quod ex cumque, maiores
            nulla quos quas saepe dignissimos unde reiciendis itaque aspernatur
            accusamus. Quas obcaecati totam qui recusandae rerum ut laborum
            atque nemo possimus sed, id facilis quaerat, at repudiandae aliquam
            doloribus. Perspiciatis, similique?
          </p>
        </el-card>
      </el-row>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <!-- <el-icon><calendar /></el-icon> -->
          <span>Custom</span>
        </span>
      </template>
      <el-row class="row">
        <el-card
          class="guitar_card"
          shadow="always"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26944.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Nome Linea Chitarra</span>
            <div class="bottom">
              TESTO DI DESCRIZIONE LINEA : Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta dolorem fugiat nam, officia
              reiciendis distinctio?
            </div>
          </div>
        </el-card>
        <el-card
          class="guitar_card"
          shadow="always"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26944.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Nome Linea Chitarra</span>
            <div class="bottom">
              TESTO DI DESCRIZIONE LINEA : Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta dolorem fugiat nam, officia
              reiciendis distinctio?
            </div>
          </div>
        </el-card>
        <el-card
          class="guitar_card"
          shadow="always"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/26/26944.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Nome Linea Chitarra</span>
            <div class="bottom">
              TESTO DI DESCRIZIONE LINEA : Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta dolorem fugiat nam, officia
              reiciendis distinctio?
            </div>
          </div>
        </el-card>
      </el-row>

      <el-row class="row2">
        <el-card class="guitar_card2" shadow="always">
          <img src="https://cdn-icons-png.flaticon.com/512/26/26944.png" />
        </el-card>
        <el-card class="card_text">
          <p>
            Nome Linea Chitarra <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            assumenda excepturi temporibus ipsam facere consectetur alias
            dignissimos perferendis, rerum ea ipsum veniam. Accusamus numquam a
            excepturi magni velit hic sequi delectus commodi harum repudiandae
            tempora minima cum incidunt, provident laborum asperiores officia
            tempore reprehenderit ad in ea et soluta maxime aliquam? Soluta,
            eligendi! Praesentium, dolore. Eveniet cupiditate ducimus placeat
            rem illum vel dolorem accusantium quisquam quod ex cumque, maiores
            nulla quos quas saepe dignissimos unde reiciendis itaque aspernatur
            accusamus. Quas obcaecati totam qui recusandae rerum ut laborum
            atque nemo possimus sed, id facilis quaerat, at repudiandae aliquam
            doloribus. Perspiciatis, similique?
          </p>
        </el-card>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TabsGuitars',
  setup() {
    const currentDate = ref(new Date())

    return { currentDate }
  },
}
</script>
<style scoped>
.tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.guitar_card {
  max-width: 30%;
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.guitar_card2 {
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
}

.guitar_card .image {
  max-width: 97%;
  max-height: 97%;
  padding: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.row2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card_text {
  max-width: 49%;
}
</style>
