# Symbol
> `new Symbol('str')`可以生成一个不重复的对象，该对象可以用作键值或方法名

## 使用symbol做唯一键值
> 使用Symbol不能使用.操作符
```javascript
let mySymbol = Symbol();
// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';
// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};
// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

## 使用symbol做函数名
```javascript
let s = Symbol();
let obj = {
  [s]: function (arg) { ... }
};
obj[s](123);
// 也可以简写为
let obj = {
  [s](arg) { ... }
};
obj[s](123);
```

## 使用symbol作为键值不能被遍历
> Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()

### Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
```javascript
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
// [Symbol(a), Symbol(b)]
```

### Reflect.ownKeys
> 另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名
```javascript
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
obj.name = 'jack';
obj.age = 24;
let keys = Reflect.ownKeys(obj);
console.log(keys);
// ["name", "age", Symbol(a), Symbol(b)]
```

## Symbol.for()，Symbol.keyFor()
### Symbol.for()
> 有时，我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。
```javascript
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
s1 === s2 // true
```
### Symbol.keyFor()
> 获取由Symbol.for方法声明的Symbol对象的key值
```javascript
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

## 内置的 Symbol 值
> 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。
- 详细demo看`http://es6.ruanyifeng.com/#docs/symbol`
