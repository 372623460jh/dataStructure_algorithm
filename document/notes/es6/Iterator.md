# Iterator
> 迭代器,让一个对象具有可被迭代的功能（for of）;只需要去实现[Symbol.iterator]接口就可以被for of

## for of的本质
> for of的本质其实上是去执行[Symbol.iterator]方法返回一个对象，再执行对象的next方法直到done为true
```javascript
let iteratorObj = {
  num: 0,
  [Symbol.iterator]() {
    return iteratorObj;
  },
  next() {
    if (iteratorObj.num++ < 5) {
      return { value: iteratorObj.num, done: false };
    } else {
      return { value: 999, done: true };
    }
  }
}

for (var v of iteratorObj) {
  console.log(v); //1 2 3 4 5
}
```
