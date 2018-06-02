# redux使用

## 基本使用

- reducer（相当于柜员）该方法是用来处理action的，该方法需要两个参数一个是初始化的状态，另一个是action
```javascript
function counter(state=0,action){
    // ...
}
```

- createStore传入reducer返回一个store（相当于银行），createStore方法执行时会执行一次reducer方法初始化state
```javascript
let store = createStore(counter);
```

- despatch（相当于前台小姐姐）
```javascript
store.despatch({type:'取钱'});
```

- action（相当于用户的一次操作，比如取款）
```javascript
// action就是一个js对象根据type来区分不同的action类型
{
    type:'取钱'
}
```

> 有了这几个概念我们就可以模拟一次redux的工作，现在小张要去银行取钱（action），小张找到前台小姐姐（despatch）问在哪里取钱，前台将小张带领到了柜员（reducer）这，柜员询问小张要办什么业务（action.type），小张说要取1块钱，柜员从银行（store）的保险柜（state）中取出钱。
```javascript
'use strict'
import { createStore } from 'redux'
const GET_MONEY = 'getMoney'
const SAVE_MONEY = 'saveMoney'
/**
 * 创建reducer
 */
function reducer(state = 0, action) {
    switch (action.type) {
        case GET_MONEY:
            return state - 1
        case SAVE_MONEY:
            return state + 1
        default:
            return 10
    }
}
// 根据reducer生产数据仓库
let store = createStore(reducer);
// 处理取钱action
store.dispatch({ type: GET_MONEY });
// createStore创建数据仓库时会执行reduer初始化state
console.log(`取钱后剩余余额：${store.getState()}`)
```

## combineReducers合并reducer
> 我们可以把一个庞大的reducer拆分为多个小的reducer，使用combineReducers来将多个小的reducer合并为一个大的reducer。从而达到reducer的拆分

## redux-thunk和redux-devtools
> 我的的action一般是对象，引入这个中间件以后action就可以支持funtion，既然支持function换句话说也就支持了异步（async）
> redux-devtools是Chrome调试redux的插件,这样使用：`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

> `$ npm install redux-thunk --save`

```javascript
import thunk from 'redux-thunk'
//方法1（结合redux devtools使用）
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//检查是否开启redux devtools扩展工具
));
//方法2（结合redux devtools使用）
const store = applyMiddleware(thunk)(createStore)(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//检查是否开启redux devtools扩展工具
);
```

## compose
> 把多个函数变为嵌套执行; compose(fn1,fn2,fn3,fn4); ==等价于==> (...args)=>fn1(fn2(fn3(fn4(...args))));
```javascript
function s1(s){
    console.log('s1:'+(s+1));
    return s+1;
}
function s2(s){
    console.log('s2:'+(s+2));
    return s+2;
}
function s3(s){
    console.log('s3:'+(s+3));
    return s+3;
}
const s = compose(s1,s2,s3);
s(3);//6  8  9

// 以上s方法等同于
(...args)=>s1(s2(s3(...args)));

// s(3)等同于
s1(s2(s3(3)));
```

## applyMiddleware
> redux dispatch中使用中间件

- curry柯里化
```javascript
let s = (s1,s2,s2)={
    console.log(s1,s2,s3); 
}
s(4,5,6);

let curry = s1 => s2 => s3 => {console.log(s1,s2,s3)}; 
curry(4)(5)(6);
```

- 用法
> `let newStore = applyMiddleware(mid1, mid2, mid3, ...)(createStore)(reducer, null);`

- 原理
`https://segmentfault.com/a/1190000004485808`写的灰常好

- 疑问
1. 柯里化的好处
2. `applyMiddleware`中拿去循环调用中间件的参数`{dispatch:store.dispatch,getState:store.getSatet}`中`dispatch`为啥要写成`(action)=>dispatch(action)`而不直接用`store.dispatch`

## react-redux

### Provider最外层组件,传递一个store供全局使用
```javascript
ReactDom.render(
    (
        <Provider store={store}>
            <App></App>
        </Provider>
    ),
    document.getElementById("root")
);
```

### connect
> 使用connect来加工组件，返回一个新的组件，并向新组件的`props`中注入state和操作对应的action
```javascript
const VisibleTodoList = connect(
  mapStateToProps,//放回要绑定到props上的状态的方法
  mapDispatchToProps//action操作方法集合
)(TodoList)
```

### @connect
> 使用装饰器的方式来使用connect
1. 安装babel-plugin-transform-decorators-legacy插件
2. 配置babel