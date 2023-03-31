#!/usr/bin/env node
import { program } from 'commander'

import { helpOptions } from './lib/core/help.js'
import { createCommands } from './lib/core/create.js'

// 帮助和可选选项
helpOptions(program)

// 创建命令
createCommands(program)

// 解析参数
program.parse(process.argv)
