import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import { useBootstrap } from 'vue-usebootstrap'
import router from './router'

createApp(App).use(router).use(useBootstrap, { prefix: 'Bv' }).mount('#app')
