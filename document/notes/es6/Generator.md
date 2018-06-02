# Generator
> 返回一个迭代器对象（iterator）,执行iterator.next()方法会执行到下一个yield关键字,并且返回yield关键字后的值;直到return关键字
```javascript
funnction* generitor(){
  yield 'test1';
  yield 'test2';
  retuen 'test3';
}
let iter = generitor();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
```

## 使用Generator创建对象迭代器使原生对象具备Symbol.iterator接口
```javascript
function* objectEntries(obj) {
  // 获取对象的键值数组(不包括原型链)
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    // ['first','Jane']
    // ['last','Doe']
    yield [propKey, obj[propKey]];
  }
}
let obj = Object.create({
  second: 'jianghe'
})
obj.first = 'Jane';
obj.last = 'Doe';
for (let [key, value] of objectEntries(obj)) {
  console.log(`${key}: ${value}`);
}
```

## 总结
> generator和yield配合等于[Symbol.iterator]和next方法配合
```javascript
// generator和yield
class Obj {
  constructor() {
    this.data = {
      name: 'jianghe',
      test: 'test'
    }
  }
  * objectEntries() {
    let keys = Reflect.ownKeys(this.data);

    for (let key of keys) {
      yield [key, this.data[key]];
    }
  }
}
let obj = new Obj();
for (let [key, value] of obj.objectEntries()) {
  console.log(`${key}: ${value}`);
}

// [Symbol.iterator]和next
class Obj {
  constructor() {
    this.data = {
      name: 'jianghe',
      test: 'test'
    }
  }
  [Symbol.iterator]() {
    this.keysIter = Reflect.ownKeys(this.data)[Symbol.iterator]();
    return this;
  }
  next() {
    let { value, done } = this.keysIter.next()
    return { 'value': [value, this.data[value]], done }
  }
}
let obj = new Obj();
for (let [key, value] of obj) {
  console.log(`${key}: ${value}`);
}
```

## Generator.prototype.throw
> Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
```javascript
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};
var i = g();
i.next();
try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
```

## Generator.prototype.return
> Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
```

## next()、throw()、return() 的共同点
> next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。
```javascript
const g = function* (x, y) {
  let result = yield x + y;
  return result;
};
const gen = g(1, 2);
gen.next(); // Object {value: 3, done: false}
gen.next(1); // Object {value: 1, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = 1;
```

## yield*调用另一个Generator
```javascript
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}
for (let v of bar()){
  console.log(v);
}
```
