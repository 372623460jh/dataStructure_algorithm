# let const

## let

- 与var的区别
    - 块级作用域
    - 不存在变量提升（会导致暂时性死区）
    - 不允许重复声明
---      
### 1.块级作用域
- es5是函数作用域var变量会导致块级作用域外泄:
```javascript
// 块级作用域外泄
var a = {test: '123', test1: '345'};
for (var item in a) {
    console.log(item);
}
console.log(item);//可以读出item
```
- es6中let关键字解决块级作用域外泄
```javascript
// 解决方法ES6中的let关键字
var a = {test: '123', test1: '345'};
for (let item in a) {
    console.log(item);
}
console.log(item);//块级作用域外不可以读出item

// 事实上babel会将上面语句转换为:
var a = {test: '123', test1: '345'};
for (var _item in a) {
    console.log(_item);
}
console.log(item);
```
---   
### 2.不存在变量提升
- es5中的变量提升
```javascript
console.log(foo); // 输出undefined
var foo = 2;
// 相当于
var foo;
console.log(foo); // 输出undefined
foo = 2;
```
- es6中let不存在变量提升
```javascript
console.log(bar); // 报错ReferenceError
let bar = 2;
```
- 块级作用域和变量不提升导致的暂时性死区
```javascript
//块级作用域与let变量声明之间的这一块就是暂时性死区
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
---      
### 3.不允许重复声明
- es5中同一作用域下声明两个一样的变量会后者覆盖
```javascript
var item = 1;
var item = 2;
console.log(item);//2
```
- let不允许在相同作用域内，重复声明同一个变量。
```javascript
// 报错
var item = 1;
let item = 2;
console.log(item);
```
---
## const

- const声明一个只读的常量。一旦声明，常量的值就不能改变。
    - const的作用域与let命令相同：只在声明所在的块级作用域内有效。
    - const命令声明的常量也是不提升，同样存在暂时性死区
    - const声明的常量，也与let一样不可重复声明。

- const的本质
    - const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
    ```javascript
    const foo = {}; 
    // 为 foo 添加一个属性，可以成功
    foo.prop = 123;
    foo.prop // 123
    // 将 foo 指向另一个对象，就会报错
    foo = {}; // TypeError: "foo" is read-only
    ```
    
## let和const变量的声明不在是在全局变量上
```javascript
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```
