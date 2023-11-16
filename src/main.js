import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import WaveUI library and its styles
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import 'font-awesome/css/font-awesome.min.css'

// Import Material Design icons
import '@mdi/font/css/materialdesignicons.min.css'

import Home from './components/Home.vue'
import About from './components/About.vue'
import TabsGuitars from './components/TabsGuitars.vue'
import TabsGuitars2 from './components/TabsGuitars2.vue'
import TabsBass from './components/TabsBass.vue'
import Services from './components/Services.vue'
import Services2 from './components/Services2.vue'
import Stock from './components/Stock.vue'
import Contacts from './components/Contacts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/guitars', component: TabsGuitars },
  { path: '/guitars2', component: TabsGuitars2 },
  { path: '/bass', component: TabsBass },
  { path: '/services', component: Services },
  { path: '/services2', component: Services2 },
  { path: '/stock', component: Stock },
  { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App).use(router)

// Define an empty object to hold the fetched colors
let fetchedColors = {}

// Fetch the colors.json file and populate the fetchedColors object
fetch('/colors.json')
  .then((response) => response.json())
  .then((colors) => {
    fetchedColors = colors
  })
  .catch((error) => console.error('Error fetching color data:', error))

app.use(WaveUI, {
  on: '#app',
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700,
    xl: 9999,
  },
  colors: fetchedColors, // Using the fetched colors
  css: {},
  icons: [],
  iconsLigature: 'material-icons',
  notificationManager: {
    align: 'right',
    transition: 'default',
  },
  presets: {
    'w-button': {
      color: 'light-blue-light4',
      bgColor: 'deep-purple-light2',
      tile: true,
      outline: true,
      lg: true,
    },
    'w-accordion': { expandIconRotate90: true },
    'w-overlay': { bgColor: 'pink', opacity: 0.3 },
  },
  theme: 'dark',
})

app.mount('#app')
