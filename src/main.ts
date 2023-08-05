import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/reset.css'
import 'virtual:svg-icons-register'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
