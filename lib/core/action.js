import fs from 'fs'
import { promisify } from 'util'

import downloadGitRepo from 'download-git-repo'
const download = promisify(downloadGitRepo)
// import open from 'open'

import { vueRepo } from '../config/repo-config.js'
import { commandSpawn } from '../utils/terminal.js'
import { compile, writeToFile, isDirExist } from '../utils/utils.js'
import { join, resolve } from 'path'

// 创建项目命令
const createProjectAction = async (project, isRun) => {
  // 判断文件夹是否存在
  try {
    fs.statSync(project)
    console.log('\n【?】文件夹已存在,正在删除该文件夹······')
    await commandSpawn('rm', ['-rf', project])
    console.log('【!】文件夹已删除······')
  } catch (err) {
    // 不存在
    console.log('\n【?】正在开始创建tutu的vue3项目模板······')
  }
  // clone项目
  await download(vueRepo, project, { clone: true })
  console.log('【!】远程模板已clone成功······')
  // 安装依赖
  console.log('\n【?】开始初始化git仓库······')
  await commandSpawn('git', ['init'], {
    cwd: `./${project}`
  })
  console.log('【!】初始化git仓库成功······')

  console.log('\n【?】开始修改git分支名称······')
  await commandSpawn('git', ['branch', '-m', 'main'], {
    cwd: `./${project}`
  })
  console.log('【!】修改git分支名称成功······')

  console.log('\n【?】开始安装依赖······')
  const command = process.platform === 'win32' ? 'cnpm.cmd' : 'cnpm'
  await commandSpawn(command, ['install'], {
    cwd: `./${project}`
  })
  console.log('【!】安装依赖成功······')
  console.log('【!】项目创建成功，感谢您的使用······')

  // 运行项目
  if (isRun) {
    console.log('\n【?】开始运行项目,并打开浏览器······')
    commandSpawn('npm', ['run', 'dev'], {
      cwd: `./${project}`
    })
    // 打开浏览器(已移交vite)
  }
}

// 添加组件相关命令
const newComponentAction = async (name, dest) => {
  isDirExist(dest)
  // 1.编译ejs模块result
  console.log('\n【?】正在编译ejs模板······')
  const componentResult = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLowerCase()
  })
  console.log('\n【!】编译ejs模板成功······')
  // 2.将componentResult写入到对应.vue文件中，并将该.vue文件放到对应文件夹里
  console.log('\n【?】正在写入对应模板······')
  const targetPath = resolve(dest, `${name}.vue`)
  writeToFile(targetPath, componentResult)
  console.log('\n【!】创建组件成功······')
}

// 添加页面相关命令
const newPageAction = async (name, dest) => {
  const newDest = join(dest, name)
  await isDirExist(newDest)
  // 1.编译ejs模块result
  console.log('\n【?】正在编译ejs模板······')
  const pageResult = await compile('vue-page.ejs', {
    name,
    lowerName: name.toLowerCase()
  })
  const routerResult = await compile('vue-router.ejs', {
    name,
    lowerName: name.toLowerCase()
  })
  console.log('【!】编译ejs模板成功······')
  // 2.将pageResult写入到对应.vue文件中，并将该.vue文件放到对应文件夹里
  console.log('\n【?】正在写入对应模板······')
  const pagePath = resolve(dest, name, `${name}.vue`)
  const routerPath = resolve(dest, name, `router.ts`)
  writeToFile(pagePath, pageResult)
  writeToFile(routerPath, routerResult)
  console.log('【!】创建页面、路由成功,并且已经自动导入动态路由······')
}

// 添加store相关命令
const newStoreAction = async (name, dest) => {
  const newDest = join(dest, name)

  console.log(newDest)
  isDirExist(newDest)
  // 1.编译ejs模块result
  console.log('\n【?】正在编译ejs模板······')
  const storeResult = await compile('vuex-store.ejs', {})
  const typeResult = await compile('vuex-type.ejs', {})
  console.log('【!】编译ejs模板成功······')
  // 2.将storeResult写入到对应.vue文件中，并将该.vue文件放到对应文件夹里
  console.log('\n【?】正在写入对应模板······')
  const storePath = resolve(dest, name, `${name}.ts`)
  const typePath = resolve(dest, name, `type.ts`)
  writeToFile(storePath, storeResult)
  writeToFile(typePath, typeResult)
  console.log('【!】创建store仓库成功,并已经自动导入该模块······')
}

export { createProjectAction, newComponentAction, newPageAction, newStoreAction }
