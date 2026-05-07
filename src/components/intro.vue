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
          <p>Я клинический психолог. В частной практике с 2017 года.</p>

          <p>С 2015 года работала волонтером на телефоне доверия после прохождения курсов подготовки консультантов - еще во время учебы. Также участвовала в работе чата доверия для подростков «Твоя территория».</p>

          <p>В работе я люблю конкретику. Мне важно, чтобы терапия не превращалась в расплывчатые разговоры, после которых непонятно, что делать дальше. Даже сложные переживания - тревогу, стыд, самокритику, страх оценки - можно постепенно разбирать понятным и бережным способом.</p>

          <p>Я работаю в когнитивно-поведенческом подходе, ACT и интегративной терапии. Мы смотрим, как связаны мысли, эмоции, телесные реакции и поведение, а также как человек относится к своим мыслям: спорит с ними, верит им, пытается избавиться или учится замечать их без подчинения.</p>

          <p>Чаще всего я работаю не с идеей “убрать боль навсегда”, а с тем, как жить и действовать иначе уже сейчас - даже если тревога, стыд или внутренний критик пока остаются рядом.</p>

          <p>Мне близка идея ответственности без самонаказания: замечать, на что вы действительно можете влиять, признавать свои ограничения и постепенно возвращать себе больше свободы в выборе действий.</p>
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