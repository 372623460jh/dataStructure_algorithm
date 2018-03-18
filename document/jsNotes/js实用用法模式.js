//====================================================开始==============================================================
/**
 * 一个新对象，带着指定的原型对象和属性。
 * Object.create(proto, [propertiesObject]);
 * 创建一个新对象,原型指向Array.prototype
 * 创建一个arrayMethods对象继承自Array.prototype
 * @type {Array}
 */
var arrayMethods = Object.create(Array.prototype);
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * 使用Object.create实现继承重写父类方法并可以调用父类方法
 * 使用for-in进行循环也被称为“枚举”。
 * @type {Array}
 */
var arrayMethods = Object.create(Array.prototype);
// 重写arrayMethods的push方法
Object.defineProperty(arrayMethods, 'push', {
    value: function () {
        console.log('重写的push方法');
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        //执行父类方法
        var result = Array.prototype.push.apply(this, args);
        return result;
    },//值
    enumerable: false, //可枚举属性
    writable: true,//可写
    configurable: true//可被删除
});
//这样就实现了arrayMethods继承了Array.prototype并重写了push方法
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * 在JavaScript中，对象的属性分为可枚举和不可枚举之分，
 * 它们是由属性的enumerable值决定的。可枚举性决定了这个属性能否被for…in查找遍历到。
 * 获取new Array(3)中的可枚举属性（不包含原型中）
 * @type {Array}
 */
var propArr = Object.getOwnPropertyNames(new Array(3));
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * 获取对象中某属性的属性描述器
 * @type {{test: string}}
 */
var obj = {test: 'name'};
var property = Object.getOwnPropertyDescriptor(obj, 'test');
//获得该属性的描述器对象 {value: "name", writable: true, enumerable: true, configurable: true}
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * call和apply方法使用undefined去调用时，被调用方法执行上下文为，环境最高对象（浏览器：window,node：global）
 * @type {{test: A.test}}
 */
var A = {
    test: function () {
        console.log(this);
    }
};
A.test.call(undefined);     //window
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * JavaScript 中的正常任务与微任务
 * 正常情况下，JavaScript的任务是同步执行的，即执行完前一个任务，
 * 然后执行后一个任务。只有遇到异步任务的情况下，执行顺序才会改变。
 * 这时，需要区分两种任务：
 * 正常任务（宏任务task）与微任务（microtask）。
 * 它们的区别在于：
 * “正常任务”在下一轮Event Loop执行，
 * “微任务”在本轮Event Loop的所有任务结束后执行。
 *
 * setImmediate，MessageChannel，setTimeout会，各种事件（比如鼠标单击事件）的回调函数 会产生宏任务
 * process.nextTick和Promise则会产生微任务
 */
console.log(1);
setTimeout(function () {
    console.log(2);
}, 0);
Promise.resolve().then(function () {
    console.log(3);
}).then(function () {
    console.log(4);
});
console.log(5);
// 输出: 15342
// 解释：Promise是微任务，setTimeout是宏任务。
// 第一次Event Loop 执行1 5
// 本轮Event Loop的所有任务结束后执行微任务Promise输出3 4
// 下一轮Event Loop 执行2
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * Array中的sort方法
 * @type {[*]}
 */
var arr = [12, 1, 2, 21, 3];
function compare_fn(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
arr.sort(compare_fn);
console.log(arr);//[1, 2, 3, 12, 21]
// 当sort中回调方法返回。负数:时第一个参数比第二个参数小;0:两个值相等;正数:如果第一个参数比第二个参数大
// 只有就可以实现升续排序. 可以简写为：
arr.sort(function (value1, value2) {
    return value1 - value2;
});
// 降序排序. 可以简写为：
arr.sort(function (value1, value2) {
    return -(value1 - value2);
});
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * 老司机简写法
 */
//取整
parseInt(a, 10); //Before
Math.floor(a); //Before
a >> 0; //Before
~~a; //After
a | 0; //After
//四舍五入
Math.round(a); //Before
a + .5 | 0; //After
//内置值
undefined; //Before
void 0; //After, 快
0[0]; //After, 略慢
//内置值无穷大
Infinity;
1 / 0;
//布尔值短写法
true; //Before
!0; //After
//布尔值短写法
false; //Before
!1; //After
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * childNodes
 * element中的childNodes属性会返回子元素列表(会将纯文本返回为nodeType=3的element)
 * 如：
 * <div class='test'>
 *     jianghe
 *     <div></div>
 *     yunnan
 * </div>
 * 父节点.test的childNodes属性是一个length = 3的数组：
 * [
 *     text(jianghe),
 *     div,
 *     text(yunnan)
 * ]
 */
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * appendChild方法
 * appendChild会移除原dom
 * dom a;
 * dom b;
 * //a的第一个自己点会被移除剪切到b中
 * b.appendChild(a.firstChild);
 */
//====================================================结束==============================================================


//====================================================开始==============================================================
/**
 * export与export default区别
 * export :导入时需要加{}
 * export default :导入时不需要
 *
 * 如 export class Fruit{}
 * 需要 import {Fruit} from './modules/modules1'
 *
 * 如 export default class Fruit{}
 * 需要 import Fruit from './modules/modules1'
 */
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 数组方法
 */
// 拷贝生成新数组
var arr = [1, 2, 3, 4, 5, 6, 8];
var copyArr = arr.slice(0);
var copyArr1 = arr.slice(2, 5);// 拷贝2-5位

// 数组左出栈
var left = arr.shift();//arr[0]出栈

// 数组右出栈
var right = arr.pop();//arr[arr.length-1]出栈

// 链接两个数组生成一个新数组
var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];
var all = arr1.concat(arr2);//合并为[1,2,3,3,4,5]

// 剪切数组splice第一个参数表示从哪个下标开始 第二个参数是剪切几个元素
var arr1 = [1, 2, 3];
var scissors = arr1.splice(1, 1);//scissors为[2]  //arr1为[1, 3]

//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * Object.assign方法：合并对象
 * 类似于数组的concat，Object.assign方法是用来合并对象的，如果存在重复属性，后来的覆盖前面的
 */
var a = {a: 1, b: 2};
var b = {b: 3, d: 4};
var c = Object.assign(a, b);
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * with方法：with 语句用于设置代码在特定对象中的作用域。
 */
function scope() {
    this.data = {
        test1: '我在独立作用域中',
    };
    this.say = function (ss) {
        console.log(ss);
    }
}

function say(ss) {
    console.log(ss);
};
window.data = {
    test1: '我在window上',
};

var s = new scope();
var fncode = 'with(this){say(data.test1);}';
var render = new Function(fncode);
render.call(s);
render.call(window);
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * js中的Array对象是动态扩展长度的
 */
var ss = new Array(3);
ss.push(123);
//这样操作后数组的长度会变为4，前三位是empty，第四位是123。
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * js中声明全局变量var和 不使用var的区别
 * var定义的全局变量不可以被delete，换句话说就是var声明的全局变量不是window上的属性
 * 不用var定义的全局变量可以被delete，换句话说就是不用var声明的全局变量是window上的属性
 */
// 定义三个全局变量
var global_var = 1;
global_novar = 2; // 反面教材
(function () {
    global_fromfunc = 3; // 反面教材
}());

// 试图删除
delete global_var; // false
delete global_novar; // true
delete global_fromfunc; // true

// 测试该删除
typeof global_var; // "number"
typeof global_novar; // "undefined"
typeof global_fromfunc; // "undefined"
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 在任何作用域下自执行方法的this都是指向window
 */
var obj = {
    method: function () {
        (function () {
            console.log(this);
        })();
    }
};
obj.method();

//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 变量声明提升
 * 变量声明的提升在函数声明提升之前
 * @type {string}
 */
myname = "global"; // 全局变量
function func() {
    alert(myname); // "undefined"
    var myname = "local";
    alert(myname); // "local"
}
func();
//实际上代码如下：
myname = "global"; // global variable
function func() {
    var myname; // 等同于 -> var myname = undefined;
    alert(myname); // "undefined"
    myname = "local";
    alert(myname); // "local"
}
func();
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * for in 会遍历出原型链上的属性如需过滤可使用hasOwnProperty方法
 * @type {string}
 */
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};
Object.prototype.clone = function () {
};
for (var i in man) {
    console.log(i, ":", man[i]);
}
//过滤原型链上的属性修改为
for (var i in man) {
    if (man.hasOwnProperty(i)) { // 过滤
        console.log(i, ":", man[i]);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
//函数声明: （函数名会被当做函数声明去提升）
// function 函数名称 (参数：可选){ 函数体 }

//函数表达式：（函数名会被当做变量去提升）
// var 函数名称 = function (参数：可选){ 函数体 }

// 函数声明只能出现在程序或函数体内。它们不能出现在Block（块）（{ ... }）中，例如不能出现在 if、while 或 for 语句中
// 块中只能是表达式

/**
 * 变量提升是在当前方法作用域内进行提升,变量提升优先级大于函数提升优先级
 */
// 变量提升
alert(ss);
var ss = '123';
// 等价于
var ss;
alert(ss);
ss = '123';

// 函数提升
alert(fn());
function fn() {
    console.log('hello world');
}
// 等价于
function fn() {
    console.log('hello world');
}
alert(fn());

//作用域内提升
!(function () {
    var ss = 'test';
    console.log(ss);
    fn();
    function fn() {
        console.log(ss);
        var ss = 'fnsss';
        console.log(ss);
    }
})();
// 等价于
!(function () {
    var ss;

    function fn() {         // 函数提升到当前作用域顶部，优先级低于表达式提升
        var ss;             // 提升到单钱作用顶部
        console.log(ss);    // undefined
        ss = 'c';
        console.log(ss);    // fnsss
    };
    ss = 'test';
    console.log(ss);        // test
    fn();
})();

// 表达式和函数提升
!(function () {
    var ss = 'test';
    fn();
    fn1();
    function fn() {
        console.log(ss);
        var ss = 'fnsss';
        console.log(ss);
    };
    var fn1 = function () {
        console.log(ss);
        var ss = 'fn1sss';
        console.log(ss);
    };
})();
// 等价于
!(function () {
    var ss;
    var fn1;

    function fn() {         // 函数提升到当前作用域顶部，优先级低于表达式提升
        var ss;             // 提升到单钱作用顶部
        console.log(ss);    // undefined
        ss = 'fnsss';
        console.log(ss);    // fnsss
    };
    ss = 'test';
    fn();
    fn1();                  // fn1 is not a function
    fn1 = function () {     // 函数表达式当做普通表达式来提升
        console.log(ss);
        var ss = 'fn1sss';
        console.log(ss);
    };
})();

// 表达式中的方法，只在自己的作用域中生效
!(function () {
    var f = function foo() {// 命名函数表达式(给表达式中的函数取名)
        return typeof foo; // foo是在内部作用域内有效
    };
    console.log(typeof foo);// foo在外部用于是不可见的
    f();
})();

// 等价于
var f;
f = function foo() {
    return typeof foo; // foo是在内部作用域内有效
};
console.log(typeof foo);// foo在外部用于是不可见的
f(); // "function"
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * arguments.callee 在哪一个函数中运行，它就代表哪个函数。 一般用在匿名函数中。
 * 在匿名函数中有时会需要自己调用自己，但是由于是匿名函数，没有名子，无名可调。
 * 这时就可以用arguments.callee来代替匿名的函数
 */
(function (n) {//相当于递归调用这个匿名函数 实现n的阶乘
    if (n > 1)    return n * arguments.calle(n - 1);
    return n;
})(10);
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * arguments.callee 在哪一个函数中运行，它就代表哪个函数。 一般用在匿名函数中。
 * 在匿名函数中有时会需要自己调用自己，但是由于是匿名函数，没有名子，无名可调。
 * 这时就可以用arguments.callee来代替匿名的函数
 */
Object.prototype.x = 'outer';
(function(){
    var x = 'inner';
    (function foo(){
        alert(x); // 提示框中显示：inner 函数作用域
        alert(foo.x); // 提示框中显示：outer 原型链
    })();
})();
//====================================================结束==============================================================
