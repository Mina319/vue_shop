import {
  ElButton, ElForm, ElFormItem, ElInput, ElMessage,
  ElContainer, ElHeader, ElAside, ElMain, ElMenu, ElSubmenu,
  ElMenuItem, ElBreadcrumb, ElBreadcrumbItem, ElCard, ElRow, ElCol,
  ElTable, ElTableColumn, ElSwitch, ElTooltip
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
  app.use(ElCard)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElSwitch)
  app.use(ElTooltip)
  // 将 ElMessage弹框组件 挂载到Vue原型对象上
  app.config.globalProperties.$message = ElMessage
}
