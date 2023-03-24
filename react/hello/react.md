启动 `npm run dev`

Next.js file-based routing 基于文件路由，也就是通过文件名可以直接访问，每个文件都是一个路由

```js
// default
export default function Button() {}
import Button from './button.js'

// named
export function Button() {}
import { Button } from './button.js'
```