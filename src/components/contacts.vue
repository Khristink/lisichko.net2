<script lang="ts">
import { defineComponent } from 'vue'
import PetalBack from '@/components/petalBack.vue'

type Contact = {
  href: string
  icon?: string
  text: string
  isExternal: boolean
  imgSrc?: string
  alt?: string
}

export default defineComponent({
  name: 'Contacts',
  components: { PetalBack },
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
      ] as Contact[]
    }
  }
})
</script>

<template>
  <v-container fluid class="relative-position pa-0">
    <PetalBack />

    <v-container fluid style="padding: 5rem 1.25rem;">
      <div class="title-container">
        <h3 class="title">Контакты</h3>
      </div>

      <v-row class="ma-7 d-flex justify-center">
        <v-col cols="12" md="6">
          <v-list class="transparent">
            <!-- контакты из массива -->
            <v-list-item
                v-for="contact in contacts"
                :key="contact.href"
            >
              <a
                  :href="contact.href"
                  :target="contact.isExternal ? '_blank' : '_self'"
                  :rel="contact.isExternal ? 'noopener' : undefined"
                  class="d-flex align-center contact-link"
                  :aria-label="contact.text"
              >
                <template v-if="contact.imgSrc">
                  <v-img
                      :src="contact.imgSrc"
                      :alt="contact.alt || ''"
                      width="88"
                      height="31"
                      style="object-fit: contain;"
                  />
                  <span class="ml-2">{{ contact.text }}</span>
                </template>

                <template v-else>
                  <i :class="contact.icon" class="mr-2" aria-hidden="true" />
                  <span>{{ contact.text }}</span>
                </template>
              </a>
            </v-list-item>

            <v-divider class="my-8" />

            <!-- отдельный блок b17 - вне цикла -->
            <v-list-item>
              <a
                  href="https://www.b17.ru/khristina_kuzmina/?prt=242032"
                  target="_blank"
                  rel="noopener"
                  class="d-flex align-center contact-link"
                  aria-label="Профиль на b17"
              >
                <v-img
                    src="https://www.b17.ru/img/b17_88x31_b_retina.png"
                    alt="b17"
                    width="30"
                    height="31"
                    style="object-fit: contain;"
                />
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

.title-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.title {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
}

.contact-link {
  text-decoration: none;
  color: inherit;
}
</style>