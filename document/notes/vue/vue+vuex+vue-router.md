## webpack
> 简单来说webpack只支持js 作用就是给定一个输入 产出一个输出 所以遇到webpack不知道的的类型如.less,.vue等等的时候就需要额外的加载器

> 在package.json中script中设置的env只能在node环境中使用，所以我们需要使用DefinePlugin来设置js中的env，这样在使用webpack打包时vue，react就可以区分env了。
```javascript
plugins:[
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV:isDev ? '"development"' : '"production"'
        }
    })
]
```