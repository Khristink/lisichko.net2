<script lang="ts">
import {defineComponent} from 'vue'
import PetalBack from "@/components/petalBack.vue";

export default defineComponent({
  name: "Media",
  components: {PetalBack},
  data() {
    return {
      articles: [
        {
          title: "Как буллят за худобу и как люди это переживают",
          url: "https://holod.media/2023/11/11/bulliat-za-khudobu/"
        },
        {
          title: "Что такое весеннее обострение",
          url: "https://rbclife.ru/news/641432359a794768b1027cd0"
        },
        {
          title: "Осенняя апатия или депрессия",
          url: "https://m.sobaka.ru/health/health/116381"
        },
        {
          title: "Подкаст первые серьезные отношения",
          url: "https://podcast.ru/e/2M2Sp3M-rAc"
        },
        {
          title: "«Снимаешь парик и чувствуешь себя голой»: как живут женщины с алопецией",
          url: "https://www.forbes.ru/forbes-woman/541222-snimaes-parik-i-cuvstvues-seba-goloj-kak-zivut-zensiny-s-alopeciej?utm_source=forbes&utm_campaign=new_feed"
        },
        {
          title: "Уютный контент: как и почему зумеры и миллениалы полюбили рукоделие",
          url: "https://www.forbes.ru/svoi-biznes/527779-uutnyj-kontent-kak-i-pocemu-zumery-i-millenialy-polubili-rukodelie?abRecommendationArticles=drkcbcntv"
        }
      ]
    }
  }
})
</script>

<template>
  <v-container fluid class="relative-position pa-0">
    <PetalBack backTheme="backDark"/>
    <v-container fluid style="padding: 5rem 1.25rem">
      <div class="title-container-dark">
        <h3 class="title-container-dark">Медиа и публикации</h3>
      </div>
      <v-row class="ma-7">
        <v-col cols="12" md="6">
          <v-list class="transparent-dark">
            <v-list-item
                v-for="(item, index) in articles"
                :key="index"
                class="ma-1 pa-0"
            >
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <a :href="item.url"><em>Перейти на страницу статьи</em></a>
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
  height: 100vh;
}

.v-list-item-title {
  color: #E4C4B8 !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: clip !important;
  line-height: 1;
}

.v-list {
  color: #E4C4B8  !important;
}

a {
  color: #E4C4B8 !important;
}
</style>