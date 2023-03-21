npm 全称 Node Package Manager，是 node.js 官方内置的包管理工具

#### npm 初始化
- 创建一个空目录，以此目录为工作目录，进入这个目录执行 `npm init`
- `npm init` 作用是将目录初始化为一个包，`交互式创建` package.json 文件，也就是通过命令行让我们输入一些信息
- package.json 是包的配置文件，每个包都必须要有 package.json，可以手动创建和修改
- 使用 `npm init -y` 或者 `npm init --yes` 快速创建 package.json

#### 查找包
https://www.npmjs.com/

#### 安装包
`npm install <包名>`
`npm i <包名>`

比如下载 npn install uniq

#### 生产依赖和开发依赖
- 生产依赖 `npm i -S <包名>` 或 `npn i --save <包名>` ，-S 是默认选项，包信息保存在 package.json 中的 dependencies 属性
- 开发依赖 `npm i -D <包名>` 或 `npm i --save-dev <包名>`，包信息保存在 package.json 中的 devDependencies 属性

#### 全局安装
- `npm i -g <包名>` 全局安装的命令不受工作目录位置影响
- 可以通过 `npm root -g` 查看全局安装包的位置
- 不是所有的包都适合全局安装，只有全局类的工具才适合，可以通过查看包的官方文档来确定安装方式

