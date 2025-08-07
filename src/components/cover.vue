<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Cover"
})
</script>

<template>
  <v-container fluid class="cover-container back pa-0 ma-0">
  <v-row  class="pa-0 ma-0">
    <v-col cols="12" sm="6" lg="6" xl="6" class="pa-0">
      <div class="text-container" style="background-color: #75575385">
        <h3><em>Привет!  <br> Меня зовут Христина, веду частную практику в сфере психотерапии и консультирования с 2017 года</em></h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" class="pa-0">
      <v-container fluid class="pa-0 container">
      <v-img src="public/flowerProtea.png" alt="цветок протеи" class="flower-img"/>
      </v-container>
    </v-col>
  </v-row>
    <div class="pa-8 ma-0 d-flex justify-center align-center flex-column" style="background-color: #75575385">
      <p>Подробнее обо мне тут</p>
      <v-icon>mdi-arrow-down</v-icon>
    </div>
  </v-container>
</template>

<style scoped>
.cover-container {
  width: 100%;
  height: auto;
  color: #E4C4B8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
.container {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.text-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #E4C4B8;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  box-sizing: border-box;
}

.text-container h3 {
  margin: 2rem 1.25rem;
}

.text-container p {
  margin-top: auto;
}

.flower-img {
  max-width: 100%;
  height: auto;
  display: block;
  border: transparent;
  border-radius: 50px;
  -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  mask-image: radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
}
</style>