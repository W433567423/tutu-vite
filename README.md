# tutu-vite 的脚手架

一个高度定制化的前端脚手架(基于 vite4)

## 环境要求

- 安装了 cnpm
- Github 访问正常
- 执行 `sudo npm link`

## 食用方式

### 创建项目:

- **命令**:`tutu-vite create <project> [-r]`

- **功能描述**:会自动创建项目、安装依赖(包括 eslint,commitlint,husky,lint-staged)、运行项目
- **参数描述**:使用 -r 来运行项目，并打开浏览器 (默认为不执行)
- **eg**: tutu-vite create demo
- **注意事项:**<mark>请及时配置路由中的/路径</mark>
- **注意事项:<mark>创建完成务必进入项目目录**</mark>

### 新增一个页面:

- **命令**:`tutu-vite newpage <pageName> [-d <dest>] [-e <edition>]`

- **功能描述**:会自动添加页面与路由
- **参数描述**:使用 -d 来指定路径(默认为 src/pages)
- **参数描述**:使用 -e 来指定版本(默认为 vue3)
- **eg**: tutu-vite newpage newPage
- **注意事项**:<mark>已自动引入该页面</mark>

### 新增一个组件:

- **命令**:`tutu-vite newcpn <componentName> [-d <dest>] [-e <edition>]`

- **功能描述**:会自动添加组件
- **参数描述**:使用 -d 来指定路径(默认为 src/components)
- **参数描述**:使用 -e 来指定版本(默认为 vue3)
- **eg**: tutu-vite newcpn halloWorld

### 新增一个 store 模块:

- **命令**:`tutu-vite newstore <moduleName> [-d <dest>]`

- **功能描述**:会自动添加一个 store 模块和声明文件
- **参数描述**:使用 -d 来指定路径(默认为 src/store/modules)
- **eg**: tutu-vite newstore user
- **注意事项:**<mark>已自动引入该模块</mark>

## 帮助&&其他

- 使用**命令**:`tutu-vite -h`获取帮助信息
- 使用**命令**:`tutu-vite -V`查看当前版本信息
- <mark>注意,您的 TS 声明文件应为 type.ts/\*.d.ts 格式</mark>

## 画饼

- 将来会支持更多模板(如 vue2,或是自动配置一些 ui 库)火之歌框架(如 React),
