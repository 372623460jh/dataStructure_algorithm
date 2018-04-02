##1 entry
入口文件，可以有多个，对象的键值是对应页面文件的名字，
- entry配置：
	
	```javascript
    entry: {
        //入口文件
        index: './app/spa/config/config.js',
        vendor: [
            'jquery'
        ]
    },
	```

##2 output

输出文件，即输入文件各模块的依赖在module和plugins等编译后的产出

- 2.1 path:输出路径

- 2.2 filename：输出文件名

- 2.3 publicPath：资源文件路径（比如在项目中引入了额外的字体图标或者超出图片压缩模块压缩大小的本地图片，都需要编译到该资源文件下）

- output配置：
	
	```javascript
    entry: {
        //输出文件
        path: path.join(__dirname, '/build'),
        publicPath: '',
        filename: 'bundle.js',
    },
	```

##3 module

模块

- 3.1 loaders：加载器（webpack loader的执行顺序是从右到左）

  - test：正则匹配文件类型；

  - exclude：忽略的目录；

  - loader：使用的加载器；

- 3.1.1 js加载器babel如需要将ES5代码编译为ES6需要引入babel-loader模块并在项目根目录下创建.babelrc文件

  - .babelrc文件：

	```javascript
	{
	  "presets": [
	    "es2015"
	  ]
	}
	```
  - loader配置：
	
	```javascript
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
	```
	
- 3.1.2 css加载器过css-loader解析.css文件，通过style-loader将css代码的style标签中

  - loader配置：

  	```javascript
    {
        test: /\.css$/,
        loader: "style-loader!css-loader"
		// 它在css-loader后面加了一个查询参数modules，表示打开 CSS Modules 功能。
        // loader: "style-loader!css-loader?modules" 
    }
	```

  - CSS Modules阮一峰博客： http://www.ruanyifeng.com/blog/2016/06/css_modules.html

- 3.1.3 字体矢量文件加载器通过url-loader模块加载，将小于limit（以bytes为单位）的大小的文件以base64压缩（将资源文件转为base64码会使体积变大，所以建议只针对小文件进行转码）

  - loader配置：

	```javascript
    {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
		//将资源文件>1024byte的打包到output中publicPath所在目录fonts文件夹下
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
    }
	```

- 3.1.4 图片文件加载器通过url-loader模块加载，将小于limit（以bytes为单位）的大小的文件以base64压缩（将资源文件转为base64码会使体积变大，所以建议只针对小文件进行转码）

  - loader配置：

	```javascript
    {
        test: /\.(gif|jpe?g|png|ico)$/,
		//将资源文件>1024byte的打包到output中publicPath所在目录img文件夹下
        loader: 'url-loader?limit=1024&name=img/[name].[ext]'
    }
	```

##4 plugins

插件
	
- 4.1 DefinePlugin：通过该插件配置的属性会成为一个全局属性（pro,dev）
	
  - 配置：

	```javascript
    new webpack.DefinePlugin({
        //在任何地方都可以访问到__DEV__()
        __DEV__: true
    }),
	```

- 4.2 UglifyJsPlugin：压缩js插件（pro）

  - 配置：

	```javascript
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        },//压缩代码
        beautify:true,//美化代码
        mangle: {
            except: ['$', 'exports', 'require']
        }//通过设置except数组来防止指定变量被改变
    }),
	```

- 4.3 DedupePlugin：去除重复依赖插件webpack2后此插件无用忽略（pro）

  - 配置：

	```javascript
	new webpack.optimize.DedupePlugin()
	```

- 4.4 OccurrenceOrderPlugin： webapck 会给编译好的代码片段一个id用来区分,而这个插件会让webpack在id分配上优化并保持一致性。具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块(pro)

  - 配置：

	```javascript
	new webpack.optimize.OccurrenceOrderPlugin()
	```

- 4.5 CommonsChunkPlugin : 公共模块提取，就是把依赖库(比如react react-router, redux,jquery)打包到一起（pro）

  - 配置：

	```javascript
	//entry中的vendor
    //vendor: [
    //    'jquery',
	//	  'react',
    //    'react-dom',
    //    'react-router'
    //]
    new webpack.optimize.CommonsChunkPlugin({
        //对应entry中的vendor
        name: "vendor",
        // (给 chunk 一个不同的名字)
        filename: "vendor.js",
    }),
	```	

###以上是常用的webpack亲儿子插件

- 4.6 HtmlWebpackPlugin：html插件（pro,dev）

  - 配置：

	```javascript
    new HtmlWebpackPlugin({
        // 输入html模板
        template: 'app/index.html',
        // 输出html
        filename: 'bundle.html',
        // js插入的位置，true/'head'  false/'body'
        inject: 'body',
        // 引入那几个js对应entry的key
        chunks: ['index'],
        //引入js后加上hash值防缓存
        hash: true,
        // html压缩部分
        minify: {
            //移除HTML中的注释
            removeComments: true,
            //删除空白符与换行符
            collapseWhitespace: true
        }
    }),
	```

- 4.7 BundleAnalyzerPlugin：wepback的可视化资源分析工具（dev）

  - 配置：

	```javascript
	$$npm install --save-dev webpack-bundle-analyzer

	const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
	
	module.exports = {
	  plugins: [
	    new BundleAnalyzerPlugin()
	  ]
	}
	```

##5 devtool

开发工具，生成map文件方便调试

- 配置：

	```javascript
	devtool: 'source-map'
	```

##6 resolve

解析。

- 6.1 alias：别名（pro,dev）

	- 配置：

	```javascript
    // 路径别名
    alias: {
        // 以前你可能这样引用 import { Nav } from '../../components'
        // 现在你可以这样引用 import { Nav } from 'lib/components'
        lib: path.resolve(__dirname, 'app/libs'),

        // 注意：别名只能在.js文件中使用。
    }
	```