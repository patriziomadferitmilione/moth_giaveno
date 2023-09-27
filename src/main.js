import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home from './components/Home.vue'
import About from './components/About.vue'
import TabsGuitars from './components/TabsGuitars.vue'
import Services from './components/Services.vue'
import Contacts from './components/Contacts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/guitars', component: TabsGuitars },
  { path: '/services', component: Services },
  { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
