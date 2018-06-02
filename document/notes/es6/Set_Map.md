# Set
> ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值

## 通过数组构造Set对象
```javascript
const set = new Set([1, 2, 3, 4, 4]);// 去重
[...set]
// [1, 2, 3, 4]
```
> 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。

## 属性及方法
- `Set.prototype.constructor`：构造函数。
- `Set.prototype.size`：返回Set实例的成员总数。
- `add(value)`：添加某个值，返回 Set 结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为Set的成员。
- `clear()`：清除所有成员，没有返回值。

## 遍历方法
- `keys()`：返回键名的遍历器
- `values()`：返回键值的遍历器
- `entries()`：返回键值对的遍历器
- `forEach()`：使用回调函数遍历每个成员

# Map
> ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

## 构造Map对象,可通过二位数组构造Map
```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```

## 属性及方法
- `size`  map中有几对键值对
- `set()` 设置map中的值
- `get()` 获取map中的值
- `has()` 检测map中是否有对应的值
- `delete()` 删除map中对应的值
- `clear()` 清空map中的值
- `keys()` 获取键值对象（键值名遍历器）
- `values()` 获取值对象（值遍历器）
- `entries()` 获取键值对数组（键值对遍历器）


## 注意点

### 给map设置值时，相同的键值会覆盖，但是如何判断键值是否相同呢？基本判断方法和===类似唯一的区别就是对于NaN的判断，在map键值的判断中NaN是等于NaN的。
```javascript
const map = new Map();
map.set(-0,1);
map.set(+0,2);
map.get(0);//2

map.set(true,1);
map.set('true',2);
map.get(true);//1
```

## 遍历方法
- `keys()`：返回键名的遍历器
- `values()`：返回键值的遍历器
- `entries()`：返回键值对的遍历器
- `forEach()`：使用回调函数遍历每个成员
