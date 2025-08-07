<script lang="ts">
import {defineComponent} from 'vue'
import PetalBack from "@/components/petalBack.vue";

export default defineComponent({
  name: "Consultations",
  components: {PetalBack}
})
</script>

<template>
  <v-container fluid class="relative-position pa-0">
    <PetalBack/>
    <v-container fluid style="padding: 5rem 1.25rem">
      <div class="title-container">
        <h3 class="title-container">Консультации</h3>
      </div>
      <v-row class="ma-7">
        <v-col cols="12" class="title-container d-flex flex-column justify-center transparent">
          <h4 class="title-container">Мои Принципы Работы</h4>
          <p>Консультирую в когнитивно-поведенческом и интегративном подходах.
            В основе моей практики лежит глубокое уважение к каждому клиенту.
            Я гарантирую полное сохранение конфиденциальности, что создает безопасное
            пространство для открытого диалога. Важно, чтобы наши отношения были основаны на равенстве,
            где мы совместно ищем пути к решению ваших вопросов и достижению целей.</p>
          <br/>
          <br/>
          <br/>
          <h4 class="title-container">О Консультациях</h4>
          <p>Каждая консультация длится от 50 до 55 минут. На первой встрече
            мы знакомимся и формулируем ваш запрос, что позволяет
            нам наметить путь дальнейшей работы. Этот начальный этап важен для
            установления доверительных отношений и понимания ваших потребностей.</p>
        </v-col>
      </v-row>

    </v-container>
  </v-container>
</template>

<style scoped>
.relative-position {
  position: relative !important;
  z-index: 100 !important;
  height: 100vh;
}
</style>