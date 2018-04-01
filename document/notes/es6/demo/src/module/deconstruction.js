/**
 * 解构赋值
 * Created by Et on 2018/4/1.
 */

'use struct';
/**
 * 数组的解构方法
 * @returns {number}
 */
function fn() {
    return 7;
}
let [a, [[b, ...d], c, e = 6, f = a, g = fn()]] = [1, [[2, 3], 4]];
console.log(a);         // 1    不解释
console.log(b);         // 2    不解释
console.log(c);         // 4    不解释
console.log(d);         // [3]  展开符将剩余的所有元素当做一个数组返回
console.log(e);         // 6    如果e === undefined e等于默认值
console.log(f);         // 1    a必须被定义如果a未被定义则报错
console.log(g);         // 7    惰性求职,当给g变量赋值时才会执行fn方法

/**
 * 对象的解构方法
 * @returns {number}
 */
let obj = {};
let arr = [];
let cc, dd, ee;
({a: obj.prop, b: arr[0], cc=3, dd=obj.prop, e: ee = fn()} = {a: 1, b: 2, e: 3});
console.log(obj);       //{prop:1}
console.log(arr);       //[2]
console.log(cc);        //3
console.log(dd);        //1     没有dd变量使用obj.prop为默认值
console.log(ee);        //3     有e使用e给ee赋值,没有e使用惰性求职给ee设置默认值