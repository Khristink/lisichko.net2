<script lang="ts">
import {defineComponent} from 'vue'
import PetalBack from "@/components/petalBack.vue";

export default defineComponent({
  name: "Requests",
  components: {PetalBack},
  data () {
    return {
      requests: [
        "Депрессивные состояния",
        "Социальная тревожность",
        "Отношения с друзьями, коллегами и другими людьми",
        "Суицидальные мысли и самоповреждение",
        "Одиночество и отсутствие отношений",
        "Прокрастинация и личная эффективность",
        "Коммуникативные навыки",
        "Недовольство своим телом и внешностью",
        "Расставание и потеря близкого",
        "Сложные перемены в жизни",
        "Сексуальные и гендерные вопросы",
        "Низкая самооценка",
        "Синдром самозванца",
        "Работа с эмоциями",
        "Проблемы в обучении",
        "Отношения с партнером",
        "Тревожность",
        "Страхи и тревога"
      ]
    }
  }
})
</script>

<template>
  <v-container fluid class="relative-position pa-0">
    <PetalBack/>
    <v-container fluid style="padding: 5rem 1.25rem">
      <div class="title-container">
      <h3 class="title-container">Запросы, с которыми работаю</h3>
      </div>
      <v-row class="ma-7">
        <v-col cols="12" md="6">
          <v-list class="transparent">
            <v-list-item
                v-for="(item, index) in requests"
                :key="index"
                class="ma-0 pa-0"
            >
              <v-list-item-title>{{requests[index]}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

    </v-container>
  </v-container>
</template>

<style scoped>
.relative-position {
  position: relative !important;
  z-index: 100 !important;
}

.title-container {
  display: flex;
  justify-content: center;
  color: #5B3F3C;
}

</style>