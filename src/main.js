import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入字体图表
import './assets/fonts/iconfont.css'
import installElementPlus from './plugins/element'
// 导入全局样式表
import './assets/css/global.css'

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')
