import ejs from 'ejs'
import path, { dirname } from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
// 编译ejs
const compile = (template, data) => {
  const templatePosition = `../templates/${template}`
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const templatePath = path.resolve(__dirname, templatePosition)
  // console.log(templatePath)
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, {}, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      resolve(result)
    })
  })
}
// 写入文件
const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content)
}
// 文件夹是否存在
const isDirExist = async (path) => {
  try {
    fs.statSync(path)
  } catch (err) {
    // 不存在
    console.log(`【?】文件目录${path}不存在,正在递归创建目录······`)
    mkdirsSync(path)
    console.log(`【!】文件目录${path}创建成功······`)
  }
}

// 递归创建文件夹
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}
export { compile, writeToFile, isDirExist }
