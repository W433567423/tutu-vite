# tutu 的脚手架

一个个性化的脚手架

## 环境要求

- 安装了 cnpm
- Github 访问正常

## 食用方式

---

### 创建项目：`tutu create <project> [-r]`

- 会自动创建项目、安装依赖、运行项目
- 使用 -r 来运行项目，并打开浏览器(默认为不执行)
- ~~使用 -f 来选择框架，该功能还未开发~~
- <mark>注意:</mark>**_请及时配置路由中的/路径_**
- eg: tutu create demo
- <mark>**创建完成务必进入项目目录**</mark>

### 新增一个页面：`tutu newpage <pageName> [-d <dest>]`

- 会自动添加页面与路由
- 使用 -d 来指定路径(默认为 src/pages)
- eg: tutu newpage newPage
- <mark>**注意已自动引入该页面**</mark>

### 新增一个组件：`tutu newcpn <componentName> [-d <dest>]`

- 会自动添加组件
- 使用 -d 来指定路径(默认为 src/components)
- eg: tutu newcpn halloWorld

### 新增一个 store 模块：`tutu newstore <moduleName> [-d <dest>]`

- 会自动添加一个 store 模块和声明文件
- 使用 -d 来指定路径(默认为 src/store/modules)
- eg: tutu newstore user
- <mark>**注意已自动引入该模块**</mark>

## 帮助&&其他

---

- 使用命令`tutu -h`获取帮助信息
- 使用命令`tutu -V`查看当前版本信息
