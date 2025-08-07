<script lang="ts">
import {defineComponent} from 'vue'
import PetalBack from "@/components/petalBack.vue";

export default defineComponent({
  name: "Contacts",
  components: {PetalBack},
  data() {
    return {
      contacts: [
        {
          href: 'https://t.me/khristina_kuzmina',
          icon: 'fa-brands fa-telegram',
          text: 'Telegram',
          isExternal: true
        },
        {
          href: 'https://t.me/v_smysl',
          icon: 'fa-brands fa-telegram',
          text: 'Tg-канал: @v_smysl',
          isExternal: true
        },
        {
          href: 'https://wa.me/79933371240',
          icon: 'fa-brands fa-whatsapp',
          text: 'WhatsApp',
          isExternal: true
        },
        {
          href: 'tel:+79933371240',
          icon: 'fa-sharp fa-solid fa-phone',
          text: '+7 993 337 12 40',
          isExternal: false
        }
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
        <h3 class="title-container">Контакты</h3>
      </div>
      <v-row class="ma-7 d-flex justify-center">
        <v-col cols="12" md="6">
          <v-list class="transparent">
            <v-list-item
                v-for="(contact, index) in contacts"
                :key="index"
            >
              <a
                  :href="contact.href"
                  :target="contact.isExternal ? '_blank' : '_self'"
                  :rel="contact.isExternal ? 'noopener' : ''"
                  class="d-flex align-center"
                  style="text-decoration: none; color: inherit;"
              >
                <template v-if="contact.imgSrc">
                  <v-img
                      :src="contact.imgSrc"
                      :alt="contact.alt"
                      width="88"
                      height="31"
                      contain
                  />
                  <span style="margin-left: 0.5rem;">{{ contact.text }}</span>
                </template>
                <template v-else>
                  <i :class="contact.icon" style="margin-right: 0.5rem;"></i>
                  <span>{{ contact.text }}</span>
                </template>
              </a>
            </v-list-item>
            <br/>
            <br/>
            <br/>
            <v-list-item>
              <a
                  href="https://www.b17.ru/khristina_kuzmina/?prt=242032"
                  target="_blank"
                  rel="noopener"
                  class="d-flex align-center"
                  style="text-decoration: none; color: inherit;"
              >
                <v-img
                    src="https://www.b17.ru/img/b17_88x31_b_retina.png"
                    alt="b17"
                    width="30"
                    height="31"
                    contain
                />
                <span style="margin-left: 0.01rem;"/>
              </a>
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

</style>