# rollup使用

## 安装

- rollup 
- rollup-plugin-node-resolve
- rollup-plugin-babel
- babel-plugin-external-helpers 
- babel-preset-latest
- babel-core

```shell
npm install --save-dev rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest
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