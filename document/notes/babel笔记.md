#babel笔记

## babel-core的作用
- 以编程的方式来使用Babel，如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块。
    ```javascript
    var babel = require('babel-core');
    // 字符串转码
    babel.transform('code();', options);
    // => { code, map, ast }
    // 文件转码（异步）
    babel.transformFile('filename.js', options, function(err, result) {
      result; // => { code, map, ast }
    });
    // 文件转码（同步）
    babel.transformFileSync('filename.js', options);
    // => { code, map, ast }
    ```
    
## babel-loader的作用
- babel加载器，在webpack中想使用babel就需要使用babel-loader,babel-loader会根据.babelrc配置来会用不同的babel(如babel-preset-es2015,babel-preset-react,babel-preset-stage-0之类)
    ```javascript
    //...
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
    //...
    ```

## babel-preset-es2015的作用
- babel-preset-es2015中包含了es6->es5所有
    ```javascript
    //...
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
    //...
    ```
## babel-polyfill的作用
- Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
    - $ npm install --save babel-polyfill
    ```javascript
    //脚本头部引入：
    import 'babel-polyfill';// 或者require('babel-polyfill');
    ```