# 快速搭建 Express+Mongoose+TypeScript

## 前言

>不会写接口的前端 不是好前端

## 快速开始

安装 MongoDB 数据库(MAC平台)

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

全局安装 typescript

```bash
yarn global add typescript
tsc -v
```

全局安装 ESLint

```bash
yarn global add eslint
eslint -v
```

初始化项目

```bash
mkdir express-mongoose-typescript
cd express-mongoose-typescript
yarn init -y
npx tsconfig.json
```

安装依赖

```bash
yarn add express mongoose
yarn add -D typescript @types/node @types/express @types/mongoose
yarn add -D ts-node-dev nodemon ts-node
```

使用 ESLint
> 使用 `eslint --init` 之后选择 `To check syntax, find problems, and enforce code style` 选项跟着提示选择 到了安装包的时候选择手动使用 yarn 安装

```bash
eslint --init
yarn add -D @typescript-eslint/eslint-plugin eslint-config-standard eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard @typescript-eslint/parser
```

```js
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

配置项目启动

```bash
  "scripts": {
    "build": "tsc",
    "start": "ts-node-dev --respawn src/index.ts",
    "dev": "PORT=8000 nodemon --exec ts-node src/index.ts"
  }
```

配置基本入口

```js
import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'

const app: Express = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world')
})

const port: unknown = process.env.PORT || 3100

const main = async (): Promise<void> => {
  await mongoose.connect(
    'mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
  })
}

main()


```

## 其它

安装 yarn 和 npm 全局包

```bash
yarn global add typescript
npm install -g typescript
```

移除 yarn 和 npm 全局包

```bash
yarn global remove @vue/cli
npm uninstall -g @vue/cli
```

查看 yarn 和 npm 全局包

```bash
yarn global list
npm list -g --depth=0
```

切换 yarn 和 npm 源工具

```bash
yarn global add yrm
yrm use taobao
yrm use npm

npm install -g nrm
nrm use taobao
nrm use npm
```

## 小结

永远不要停止学习
