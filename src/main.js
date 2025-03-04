import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入字体图表
import './assets/fonts/iconfont.css'
import installElementPlus from './plugins/element'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'

// 创建 Vue 应用
const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 添加全局属性 $http
app.config.globalProperties.$http = axios
