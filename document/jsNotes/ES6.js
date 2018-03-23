//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================