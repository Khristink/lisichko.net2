<script lang="ts">
import {defineComponent} from 'vue'
import PetalBack from "@/components/petalBack.vue";

export default defineComponent({
  name: "Education",
  components: {PetalBack},
  data() {
    return {
      current_image_index: 0,
      educationList: [
        {
          title: "Подготовка консультантов телефона доверия",
          organization: "Благотворительная общественная организация, кризисный центр 812",
          year: "2014"
        },
        {
          title: "Психологическое и психотерапевтическое консультирование (подготовка телефонных консультантов)",
          organization: 'НОУДО институт психотерапии и консультирования "Гармония"',
          year: "2015"
        },
        {
          title: "Курс по определению и работе с жестоким обращением с детьми",
          organization: 'Институт практической психологии "ИМАТОН"',
          year: "2017"
        },
        {
          title: "Мастерская психотерапевтического консультирования",
          organization: 'Институт практической психологии "ИМАТОН"',
          year: "2016-2017"
        },
        {
          title: "Базовый курс когнитивно-поведенческой терапии и психологического консультирования",
          organization: "Ассоциация Когнитивно-Поведенческой Психотерапии",
          year: "2019"
        },
        {
          title: "Мастерская психотерапевтического консультирования (супервизораская группа)",
          organization: 'Институт практической психологии "ИМАТОН"',
          year: "2020"
        },
        {
          title: "Обучение работе психолога с ЛГБТИК+ клиент-ками",
          organization: "фонд Сфера",
          year: "2022"
        },
        {
          title: "Когнитивно-поведенческая терапия посттравматического стрессового расстройства (ПТСР) и К-ПТСР",
          organization: "Международный Институт Развития Когнитивно-Поведенческой Терапии",
          year: "2023"
        },
        {
          title: "Терапия клинического перфекционизма",
          organization: "Международный Институт Развития Когнитивно-Поведенческой Терапии",
          year: "2024"
        }
      ],
      carouselImages: [
        {
          src: '1.jpeg'
        },
        {
          src: '2.jpeg'
        },
        {
          src: '3.jpeg'
        },
        {
          src: '4.jpeg'
        },
        {
          src: '5.jpeg'
        },
        {
          src: '6.jpeg'
        },
        {
          src: '7.jpeg'
        },
        {
          src: '8.jpeg'
        },
        {
          src: 'perfectedu.jpg'
        },
      ]
    }
  },
  methods: {
    onCarouselChange (index) {
      this.current_image_index = index;
    }
  }
})
</script>

<template>
  <v-container fluid class="relative-position pa-0">
  <PetalBack backTheme="backDark"/>
<v-container fluid style="padding: 7rem 1.25rem">
  <div class="title-container-dark">
    <h3>Образование</h3>
  </div>
  <v-row class="ma-7">
    <v-col cols="12" md="6" class="pa-2">
      <v-list class="transparent-dark">
        <v-list-item class="ma-2">
          <v-list-item-title>
            Санкт-Петербургский Государственный Университет
          </v-list-item-title>
          <v-list-item-subtitle>Специальность: Клинический психолог</v-list-item-subtitle>
          <v-list-item-subtitle>Квалификация: Диплом специалиста</v-list-item-subtitle>
          <v-list-item-subtitle>
            Годы обучения: 2011 - 2017
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item
        v-for="(item, index) in educationList"
        :key="index"
        class="ma-2"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.organization }}<br>
            {{ item.year }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="12" md="6" class="pa-2 d-flex justify-center align-center flex-column">
      <v-carousel
          :show-arrows="false"
          hide-delimiters
          v-model="current_image_index"
          @change="onCarouselChange"
      >
        <v-carousel-item
        v-for="(image,index) in carouselImages"
        :key="index"
        >
          <v-img :src="image.src"/>
        </v-carousel-item>
      </v-carousel>
      <div
          v-if="carouselImages.length > 1"
          class="carousel-arrows"
      >
        <v-btn
            icon :disabled="current_image_index === 0"
            @click="current_image_index-=1"
            elevation="1"
            class="ma-1"
            color="#5B3F3C"
        >
          <v-icon color="#E4C4B8 !important">
            mdi-arrow-left
          </v-icon>
        </v-btn>
        <v-btn
            icon :disabled="current_image_index === carouselImages.length - 1"
            @click="current_image_index+=1"
            elevation="1"
            class="ma-1"
            color="#5B3F3C"
        >
          <v-icon color="#E4C4B8 !important">
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</v-container>
  </v-container>
</template>

<style scoped>

.v-carousel__controls__item svg {
  fill: #5B3F3C !important;
}

.relative-position {
  position: relative !important;
  z-index: 1 !important;
}

.carousel-arrows {
  width: 100% !important;
  display: flex;
  justify-content:  center;

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

</style>