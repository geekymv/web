ECMAScript Module Demo

### ES6 模块化如何在 Node.js 中运行
- 方式一：把 `index.js` `school.js` `student.js` 的扩展名都改为.mjs
- 方式二：在 `package.json` 中添加 `"type": "module"` 
运行 `node index.mjs` 或 `node index.js` 即可。

### ES6 导出数据的方式
- 分别导出
- 统一导出
- 默认导出

以上多种导出方式可以同时使用。

### ES6 导入数据的方式
- 导入全部：通用
- 命名导入：对应导出方式：分别导出、统一导出
- 默认导入：对应导出方式：默认导出

命名导入和默认导入可以同时使用。