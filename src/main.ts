import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .use(ArcoVueIcon)
    .mount('#app')
