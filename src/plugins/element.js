import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  // 将 ElMessage弹框组件 挂载到Vue原型对象上
  app.config.globalProperties.$message = ElMessage
}
