import { createProjectAction, newComponentAction, newPageAction, newStoreAction } from './action.js'
const createCommands = (program) => {
  // 创建项目
  program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action((name) => {
      createProjectAction(name, !!program?._optionValues?.run)
    })
  // 新建一个组件
  program
    .command('newcpn <name>')
    .description('new vue component,eg:tutu newCpn newComponent [-d src/components]')
    .action((name) =>
      newComponentAction(
        name,
        program?._optionValues?.dest || 'src/components',
        program?._optionValues?.edition || 'vue3'
      )
    )
  // 新建一个页面
  program
    .command('newpage <page>')
    .description('new vue page,eg:tutu newPage newPage [-d src/pages]')
    .action((page) =>
      newPageAction(
        page,
        program?._optionValues?.dest || 'src/pages',
        program?._optionValues?.edition || 'vue3'
      )
    )
  // 新建一个store
  program
    .command('newstore <store>')
    .description('new vuex store,eg:tutu newStore user [-d src/store]')
    .action((store) => newStoreAction(store, program?._optionValues?.dest || 'src/store/modules'))
}
export { createCommands }
