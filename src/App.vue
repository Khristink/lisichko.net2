<script>
import Cover from "./components/cover.vue";
import Education from "@/components/education.vue";
import Requests from "@/components/requests.vue";
import Contacts from "@/components/contacts.vue";
import Consultations from "@/components/consultations.vue";
import Media from "@/components/media.vue";
import Intro from "@/components/intro.vue";

export  default {
  components: {Intro, Media, Consultations, Contacts, Requests, Education, Cover},
  data ()  {
    return {
      menu: false,
      coverSeen: true,
      eduSeen: true,
      requestsSeen: true,
      contactsSeen: true,
      consultationsSeen: true,
      mediaSeen: true
    }
  },
  methods: {
    mainPage() {
      this.coverSeen = true;
      this.eduSeen = true;
      this.requestsSeen = true;
      this.contactsSeen = true;
      this.consultationsSeen = true;
      this.mediaSeen = true;
      this.menu = false;

  },
    onlyEdu() {
      this.coverSeen = false;
      this.eduSeen = true;
      this.requestsSeen = false;
      this.contactsSeen = false;
      this.consultationsSeen = false;
      this.mediaSeen = false;
      this.menu = false;
    },
    onlyReq() {
      this.coverSeen = false;
      this.eduSeen = false;
      this.requestsSeen = true;
      this.contactsSeen = false;
      this.consultationsSeen = false;
      this.mediaSeen = false;
      this.menu = false;
    },
    onlyContacts() {
      this.coverSeen = false;
      this.eduSeen = false;
      this.requestsSeen = false;
      this.contactsSeen = true;
      this.consultationsSeen = false;
      this.mediaSeen = false;
      this.menu = false;
    },
    onlyConsultations() {
      this.coverSeen = false;
      this.eduSeen = false;
      this.requestsSeen = false;
      this.contactsSeen = false;
      this.consultationsSeen = true;
      this.mediaSeen = false;
      this.menu = false;
    },
    onlyMedia() {
      this.coverSeen = false;
      this.eduSeen = false;
      this.requestsSeen = false;
      this.contactsSeen = false;
      this.consultationsSeen = false;
      this.mediaSeen = true;
      this.menu = false;
    }
}}
</script>

<template>
  <v-app class="no-padding">
    <v-app-bar app class="app-bar" elevation="0">
      <div class="icon-row">
        <i class="fab fa-whatsapp fa-2x" style="color:#E4C4B8;"></i>
        <i class="fab fa-telegram fa-2x" style="color:#E4C4B8;"></i>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="icon-bar" color="#E4C4B8" @click="menu=!menu"/>
    </v-app-bar>
    <v-navigation-drawer
        location="right"
        v-model="menu"
        color="#5B3F3C"
        class="navigation-menu"
        app
        temporary
        elevation="0"
    >
      <v-list class="pa-6" style="padding: 0;">
        <v-list-item class="pa-0">
          <v-btn
              text
              block
              style="background-color: #5B3F3C; color: #E4C4B8; justify-content: flex-start; width: 100%;"
              @click="mainPage"
          >
            <v-icon class="mr-3" style="color: #E4C4B8;">mdi-home-outline</v-icon>
            <span>На главную</span>
          </v-btn>
        </v-list-item>

        <v-list-item class="pa-0">
          <v-btn
              text
              block
              style="background-color: #5B3F3C; color: #E4C4B8; justify-content: flex-start; width: 100%;"
          @click="onlyEdu"
          >
            <v-icon class="mr-3" style="color: #E4C4B8;">mdi-school-outline</v-icon>
            <span>Образование</span>
          </v-btn>
        </v-list-item>

        <v-list-item class="pa-0">
          <v-btn
              text
              block
              @click="onlyReq"
              style="background-color: #5B3F3C; color: #E4C4B8; justify-content: flex-start; width: 100%;"
          >
            <v-icon class="mr-3" style="color: #E4C4B8;">mdi-file-search-outline</v-icon>
            <span>Запросы</span>
          </v-btn>
        </v-list-item>

        <v-list-item class="pa-0">
          <v-btn
              text
              block
              @click="onlyConsultations"
              style="background-color: #5B3F3C; color: #E4C4B8; justify-content: flex-start; width: 100%;"
          >
            <v-icon class="mr-3" style="color: #E4C4B8;">mdi-account-tie</v-icon>
            <span>Консультации</span>
          </v-btn>
        </v-list-item>

        <v-list-item class="pa-0">
          <v-btn
              text
              block
              @click="onlyContacts"
              style="background-color: #5B3F3C; color: #E4C4B8; justify-content: flex-start; width: 100%;"
          >
            <v-icon class="mr-3" style="color: #E4C4B8;">mdi-phone-outline</v-icon>
            <span>Контакты</span>
          </v-btn>
        </v-list-item>

      <v-list-item class="pa-0">
        <v-btn
            text
            block
            @click="onlyMedia"
            style="background-color: #5B3F3C; color: #E4C4B8; justify-content: flex-start; width: 100%;"
        >
          <v-icon class="mr-3" style="color: #E4C4B8;">mdi-newspaper</v-icon>
          <span>Медиа и публикации</span>
        </v-btn>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <Cover v-if="coverSeen"/>
      <Intro v-if="coverSeen"/>
      <Education v-if="eduSeen"/>
      <Requests v-if="requestsSeen"/>
      <Consultations v-if="consultationsSeen"/>
      <Contacts v-if="contactsSeen"/>
      <Media v-if="mediaSeen"/>
    </v-main>
  </v-app>
</template>

<style>
#app {
  padding: 0 !important;
}

.icon-row {
  padding: 1.25rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.app-bar {
  background-color: #5B3F3C !important;
}

.icon-bar {
  height: 1.25rem;
  width:  1.25rem;
}

.navigation-menu {
  width: auto !important;
  max-width: 255px !important;
}

body .v-navigation-drawer__scrim {
  background-color: transparent !important;
}

v-navigation-drawer .v-list-item-title, v-navigation-drawer .v-icon {
  color: #E4C4B8 !important;
}

span {
  white-space: normal !important;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: left;
}
</style>
