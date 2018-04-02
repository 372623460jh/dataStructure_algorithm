# ES6字符串扩展

## ES6加强了对 Unicode 的支持(特殊字符)
>之前JavaScript允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的Unicode码点。但是，这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

>ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

- 一些列针对加强Unicode的api
    - `charCodeAt`方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。
    - `fromCodePoint`方法，ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符
    - `at`方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符。
## 新增字符串api

- includes()：返回布尔值，表示是否找到了参数字符串。
>第二个参数表示从第6位开始是否包含第一个参数的值
```javascript
let s = 'Hello world!';
s.includes('o') // true
s.includes('Hello', 6) // false
```

- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
>第二个参数表示从第6位开始是否以第一个参数的值开头
```javascript
let s = 'Hello world!';
s.startsWith('Hello') // true
s.startsWith('world', 6) // true
```

- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
>第二个参数表示前5位是否以第一个参数的值结束
```javascript
let s = 'Hello world!';
s.endsWith('!') // true
s.endsWith('Hello', 5) // true
```

- repeat()：方法返回一个新字符串，表示将原字符串重复n次。
```javascript
'x'.repeat(3) // "xxx"
```

## 模板字符串
>大家比较熟悉，不赘述简单来说就是字符串中可以嵌入表达式,可以嵌套使用
```javascript
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
```
- 模板字符串的本质
>模板字符串解析器会将模板字符串通过`${*}`进行分割为一个数组（类似split方法）再按顺序计算`${*}`中的值返回一个数组，具体如下：
```javascript
let a = 5;
let b = 10;
`Hello ${ a + b } world ${ a * b }`;
//`Hello ${ a + b } world ${ a * b }`会被分割为['Hello ',' world ','']的一个数组(数组中还有一个属性raw)
//分别计算${ a + b }和${ a * b }的值15,50
//然后返回['Hello ',' world ',''],15,50
```
- String.raw()方法
>上面我们了解了模板字符串的本质，但`['Hello ',' world ',''],15,50`如何被解析为字符串呢
```javascript
let str = String.raw({raw:['Hello ',' world ','']},15,50);
console.log(str);//Hello 15 world 50
```

## 标签模板
>不要被名字迷惑，标签模板其实就是以模板字符串方式执行方法
```javascript
alert`123`;
// 等同于
alert([123]);
```
>根据模板字符串的本质解释模板标签的调用
```javascript
let a = 5;
let b = 10;
console.log`Hello ${ a + b } world ${ a * b }`
// 相当于
// `Hello ${ a + b } world ${ a * b }`会被解析为['Hello ',' world ',''],15,50
console.log(['Hello ',' world ',''],15,50);
```