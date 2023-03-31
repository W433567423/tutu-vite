// 执行终端命令
import { spawn } from 'child_process'
const commandSpawn = (...args) => {
  return new Promise((resolve) => {
    const childProcess = spawn(...args)
    // 子进程信息
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on('close', () => {
      resolve()
    })
  })
}
export { commandSpawn }
