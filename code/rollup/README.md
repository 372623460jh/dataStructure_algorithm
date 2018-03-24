# rollup使用

## 安装

- rollup 
- rollup-plugin-node-resolve
- rollup-plugin-babel
- babel-plugin-external-helpers 
- babel-preset-latest
- babel-core

```shell
npm install --save-dev rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest babel-core
```

## 配置.babelrc

```json
{
  "presets": [
    [
      "latest",
      {
        "es2015": {
          "modules": false
        }
      }
    ]
  ],
  "plugins": [
    "external-helpers"
  ]
}
```

## 配置rollup.config.js
```javascript
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default{
    entry: 'src/index.js',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: {
        file: './build/bundle.js',
        format: 'umd',
    }
}
```

## 在src中创建待打包文件

## 在控制台运行`rollup -c rollup.config.js`打包
