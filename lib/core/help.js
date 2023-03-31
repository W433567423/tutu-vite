// const program = require('commander');
import fs from 'fs'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const helpOptions = (program) => {
  // 定义版本号
  const pakagePath = resolve(__dirname, '../../package.json')
  const pkg = fs.readFileSync(pakagePath, 'utf-8')
  const pk = JSON.parse(pkg)
  program
    .version(pk.version)
    .option('-r --run', 'is run the project?,eg:-r')
    .option('-d --dest <dest>', 'a destination folder,eg:-d src/components')
    .option('-f --framework <framework>', 'the framework you want build,eg:-f vue')
    // .parse(program.argv)
    .on('-h', () => {
      console.log('\n欢迎使用tutu构建工具~')
    })
}

export { helpOptions }
