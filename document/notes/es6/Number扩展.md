# Number扩展
> ES6在原有ES5基础上扩展了一些API,属性,以及二进制八进制的表示法

## 1.二进制和八进制表示法
> ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
```javascript
0b111110111 === 503 // true
0o767 === 503 // true
```

## 2.扩展的API

- isFinite
> Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
```javascript
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
```

- isNaN
> Number.isNaN()用来检查一个值是否为NaN。
```javascript
Number.isNaN(NaN) // true
Number.isNaN(15) // false
```
---
> 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
```javascript
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
```
---

- parseInt
- parseFloat
> ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
```javascript
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45
// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
```

- isInteger
> Number.isInteger()用来判断一个数值是否为整数。
```javascript
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
```

## 3.扩展的属性
- EPSILON
> Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

- 下面介绍一个EPSILON的用法，用来设置“能够接受的误差范围”。比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。
```javascript
// 当误差小于 2 的-50 次方时
if((0.1 + 0.2 - 0.3) < Number.EPSILON * Math.pow(2, 2)){
    console.log('0.1 + 0.2 = 0.3')
}
```

## 4.指数运算符
- ES2016 新增了一个指数运算符（**）。
```javascript
2 ** 2 // 4
2 ** 3 // 8
```
