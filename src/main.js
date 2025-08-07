import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme: {
                colors: {
                    background: '#E4C4B8',  // светлый фон
                    surface: '#E4C4B8',     // фон карточек, панелей
                    primary: '#755753',     // цвет кнопок и важных элементов
                    onPrimary: '#E4C4B8',   // цвет текста на кнопках
                    onBackground: '#5B3F3C', // цвет основного текста на фоне
                },
            },
        },
    },
})

createApp(App)
    .use(vuetify)
    .mount('#app')