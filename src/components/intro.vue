<script lang="ts">
import {defineComponent} from 'vue'
import PetalBack from "@/components/petalBack.vue";

export default defineComponent({
  name: "Intro",
  components: {PetalBack},
  data() {
    return {
      books: [
        { author: "Джеймс Бадженталь", title: "Наука быть живым" },
        { author: "Ирвин Ялом", title: "Когда Ницше плакал" },
        { author: "Ирвин Ялом", title: "Палач любви и другие терапевтические истории" },
        { author: "Ирвин Ялом", title: "Как я стал собой" },
        { author: "Альберт Эллис", title: "Не позволяйте обстоятельствам и окружающим играть на ваших нервах" },
        { author: "Альберт Ленгли", title: "Дотянуться до жизни" },
        { author: "Фриц Перлз", title: "Внутри и вне помойного ведра" },
        { author: "Марша Линехан", title: "Жизнь, которую стоит прожить" },
        { author: "Виктор Франкл", title: "Человек в поисках смысла" },
        { author: "Аарон Бек", title: "Депрессия: причины и лечение" },
        { author: "Оливер Сакс", title: "Зримые голоса" },
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
        <h3 class="title-container">Обо мне</h3>
      </div>
      <v-row class="ma-7">
        <v-col cols="12" md="6" class="title-container d-flex flex-column justify-center transparent">
          <p>Частная практика с 2017 года.</p>
            <p>С 2015 года работала волонтером на телефоне доверия после прохождения курсов
            подготовки консультантов — ещё во время учёбы. Также участвовала в работе
              чата-доверия для подростков «Твоя территория».</p>
            <p>Люблю конкретику — без расплывчатых рассуждений. Убеждена, что даже
            сложные проблемы можно решать понятными способами — пусть и не всегда просто.
              За активную позицию, насколько это возможно.</p>
            <p>Исповедую идеи когнитивно-поведенческой терапии, где мысли, эмоции и поведение
            взаимосвязаны. Проникаюсь метакогнитивным подходом — в нём важнее не содержание мысли, а
              наше отношение к ней и к процессу мышления в целом.</p>

            <p>В жизни всячески пропагандирую агентность — принятие ответственности за свои действия вместе
            с осознанием и принятием личных ограничений.</p>
        </v-col>
        <v-col cols="12" md="6" class="d-flex">
          <v-img  cover src="photoMe.jpg" alt="портретное фото Христины" class="main-photo"/>
        </v-col>
      </v-row>
      <div class="title-container">
        <h3 class="title-container">Мои любимые книги, связанные с психологией</h3>
      </div>
      <v-row class="ma-7">
        <v-col cols="12" md="6" class="title-container d-flex flex-column justify-center">
          <v-list class="transparent">
            <v-list-item
            v-for="(item,index) in books"
            :key="index"
            class="pa-0"
            >
              <v-list-item-title><strong>{{item.title}}</strong>  {{item.author}}</v-list-item-title>
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


.main-photo {
  border: #AC877A 1rem solid;
  border-radius: 60px;
  margin: 1.25rem;
}
</style>