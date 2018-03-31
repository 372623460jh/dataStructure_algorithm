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
 * 数组中的下标是不可枚举的
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

// 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
var ss = Array.from({length: 0});//ss=[];

// Array.prototype.map
// map()方法在调用callback函数时，会给它传递三个参数：当前正在遍历的元素、元素索引、原数组本身。
["1", "2", "3"].map(parseInt);//[1,NaN,NaN]
// 相当于
parseInt('1', 0, ["1", "2", "3"]);//1
parseInt('2', 1, ["1", "2", "3"]);//NaN
parseInt('3', 2, ["1", "2", "3"]);//NaN

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
// 定义三个全局变量这三个变量都会被挂载到window上
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

/**
 * 极易错
 */
if (!("a" in window)) {
    var a = 1;
}
alert(a);
// 等价于
var a;
if (!("a" in window)) {
    a = 1;
}
alert(a);
//====================================================结束==============================================================

//====================================================开始==============================================================
// arguments
/**
 * arguments.callee 在哪一个函数中运行，它就代表哪个函数。 一般用在匿名函数中。
 * 在匿名函数中有时会需要自己调用自己，但是由于是匿名函数，没有名子，无名可调。
 * 这时就可以用arguments.callee来代替匿名的函数
 */
(function (n) {//相当于递归调用这个匿名函数 实现n的阶乘
    if (n > 1) {
        return n * arguments.callee(n - 1);
    }
    return n;
})(10);

/**
 * 实参个数会影响arguments的长度
 * 但arguments长度不会影响实参个数
 * 实参和arguments的值相互影响
 */
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);//10
b(1, 2);//undefined
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 原型链与作用域链
 * @type {string}
 */
Object.prototype.x = 'outer';
(function () {
    var x = 'inner';
    (function foo() {
        alert(x); // 提示框中显示：inner 函数作用域
        alert(foo.x); // 提示框中显示：outer 原型链
    })();
})();
//====================================================结束==============================================================

//====================================================开始==============================================================
// transitions 过渡效果    给某属性添加过渡效果,时间,过渡动画函数。transitions+translate3d(x,y,z)可以提升带过渡的移动效果的性能
// translate 移动         使用Translate3d(x,y,z)可以开启GPU硬件加速，Translate不需要absolute布局
// transform 变形         支持缩放scale，旋转rotate，倾斜skew
// animation+@keyframes   @keyframes申明动画，animation引用动画
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * new 关键字的执行过程如下
 * @constructor
 */
function Foo() {
};
var foo = new Foo();
// new的过程如下
// var foo = {};                                    //创建空对象
// this = foo;                                      //将this指向该空对象
// Foo.call(this);                                  //使用this去调用构造方法
// foo.__proto__ = Foo.prototype;                   //设置__proto__属性指向原型链对象
// foo.__proto__.constructor = Foo;                 //设置__proto__中的constructor属性指向构造方法
// return foo;                                      //返回创建的对象

/**
 * 特殊情况1
 * 当构造方法中返回一个非简单数据类型,那么构造方法中所有操作都无效,只会返回那个对象
 */
function Foo() {
    this.name = 'lisi';
    this.age = '24';
    return {
        name: 'zhangsan'
    }
};
var foo = new Foo();

/**
 * 特殊情况2
 * 当构造方法中返回一个简单数据类型,那么返回那个字符串在new关键字下无效，在构造方法当做方法执行时有效
 */
function Foo() {
    this.name = 'lisi';
    this.age = '24';
    return 'zhangsan';
};
var foo = new Foo();
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 闭包实现带公有私有的Module模式
 * @type {{publicValue, showAll}}
 */
moduleA = (function () {

    // 是有属性
    var privateA = 'name',
        privateB = 'age';

    // 私有方法
    function _showPublic() {
        return privateA + " " + privateB;
    }

    // 返回模块
    return {
        publicValue: 'pub',//公有属性
        showAll: function () { //公有方法
            console.log(this.publicValue + " " + _showPublic());
        }
    }
}());
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 作用域链与原型链，以及使用with改变作用域链
 * @type {number}
 */
Object.prototype.x = 10;
var w = 20;
var y = 30;
/**
 * Object.prototype也处于window对象的原型链上所以
 * window.x => Object.prototype.x === 10
 */
console.log(x); // 10
(function foo() {
    var w = 40;
    var x = 100;
    with ({z: 50}) {
        /**
         * with会改变block中的作用域,相当于
         * 找w值 = ({z: 50}).w 去Object的原型链中找W属性没找到，再去正常作用域链中找,找到40
         * 找x值 = ({z: 50}).x 去Object的原型链中找x属性找到10
         * 找y值 = ({z: 50}).y 去Object的原型链中找y属性没找到，再去正常作用域链中找,没找到，去全局找，找到30
         * 找y值 = ({z: 50}).z 找到50
         */
        console.log(w, x, y, z); // 40, 10, 30, 50
    }
    /**
     * 找x值 去作用域链中找,找到100
     * 找w值 去作用域链中找,找到40
     */
    console.log(x, w); // 100, 40
    //去全局找，找到20
    console.log(window.w); // 20
})();
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 作用域是静态的，在方法声明时就被固定不会因为在哪调用而变化
 * @type {number}
 */
// 全局变量 "x"
var x = 10;
// 全局function
function foo() {
    //在方法声明时作用域链就被固定，这里的x也就是10
    console.log(x);
}
(function (funArg) {
    // 局部变量 "x"
    var x = 20;
    // 这不会有歧义
    // 因为我们使用"foo"函数的[[Scope]]里保存的全局变量"x",
    // 并不是caller作用域的"x"
    funArg(); // 10, 而不是20
})(foo); // 将foo作为一个"funarg"传递下去
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 活动的执行上下文组在逻辑上组成一个堆栈。堆栈底部永远都是全局上下文(global context)，
 * 而顶部就是当前(活动的)执行上下文。堆栈在EC（Execution Contexts）类型进入和退出上下文的时候被修改（推入或弹出）
 */
eval('var x = 10');
(function foo() {
    eval('var y = 20');
})();
alert(x); // 10
alert(y); // "y" 提示没有声明
// ECStack的变化过程：
// ECStack = [
//     globalContext //全局上下文对象
// ];

// // eval('var x = 10');
// ECStack.push(evalContext);

// // eval exited context
// ECStack.pop();

// // foo funciton call
// ECStack.push(<foo> functionContext);

// // eval('var y = 20');
// ECStack.push(evalContext);

// // return from eval
// ECStack.pop();

// // return from foo
// ECStack.pop();
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * function的静态length属性返回的是函数声明时的参数个数
 */
function foo(x, y) {
    console.log(foo.length);//函数声明时的参数  就是2
    console.log(arguments.length);//实际调用函数时的参数个数  就是1
}
foo('a');
//====================================================结束==============================================================

//====================================================开始==============================================================
// this解释：this是上下文对象中的一个属性,this不是变量，不能被赋值。
/**
 * 全局代码中的this:
 *     this值在进入上下文时确定，并且在上下文运行期间永久不变。
 */
/**
 * 函数代码中的this:
 *     在通常的函数调用中，this是由激活上下文代码的调用者来提供的，即调用函数的父上下文(parent context )
 */
function foo() {
    alert(this);
}
foo(); // global
alert(foo === foo.prototype.constructor); // true
// 但是同一个function的不同的调用表达式，this是不同的
foo.prototype.constructor(); // foo.prototype
/**
 * 自执行方法的this
 *     在任何情况下自执行方法的this都是指向global
 */
var obj = {
    method: function () {
        (function () {
            console.log(this);// global
        })();
    }
};
obj.method();
/**
 * 方法调用的引用类型为null，this指向global
 */
function foo() {
    function bar() {
        alert(this); // global
    }

    bar();
}
foo();
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 箭头函数和普通函数区别
 * 普通函数方法中的this是指向window的
 * 而箭头函数的this是指向最近一层this
 */
function fn() {
    console.log(this); //{a:100}

    var arr = [1, 2, 3, 4];

    arr.map(function (item) {
        console.log(this); //window
        return item + 1;
    });

    arr.map(item => {
        console.log(this); //{a:100}
        return item + 1;
    })
}
fn.call({a: 100});
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * zepto原型链使用
 * 可以实现通过$(),new $(),zepto.Z(),new zepto.Z()返回的实例都具有$.fn原型方法
 */
var zepto = {};
zepto.init = function (seletor) {
    return zepto.Z(seletor);
};

//构造方法实例化出一个伪数组对象
function Z(dom, seletor) {
    dom.forEach(function (item, index) {
        this[index] = item;
    });
    this.length = dom.length;
    this.seletor = seletor || '';
};

zepto.Z = function (seletor) {
    var nodeList = document.querySelectorAll(seletor)
    var dom = Array.prototype.slice.call(nodeList);
    return new Z(dom, seletor);
};
var $ = window.$ = function (seletor) {
    return zepto.init(seletor);
};
// 原型对象
$.fn = {
    constructor: Z,
    css: function () {
    },
    html: function () {
    }
};
zepto.Z.prototype = Z.prototype = $.fn;
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 后台执行不可操作dom的多线程js:webworker
 */
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * eventloop,事件轮询机制思想。
 *
 * 在说事件轮询思想之前先说两个概念:宏任务（macrotask）与微任务（microtask）。
 * JavaScript代码是同步执行的,异步任务中就有宏任务和微任务,其中：
 * setImmediate，MessageChannel，setTimeout，各种事件（比如鼠标单击事件）的会产生宏任务，
 * process.nextTick和Promise则会产生微任务
 * 它们的区别在于：
 * “宏任务”在下一轮EventLoop执行，
 * “微任务”在本轮EventLoop的所有任务结束后执行。
 */
console.log(1);
setTimeout(function () {
    console.log(2);
}, 100);
setTimeout(function () {
    console.log(3);
}, 0);
Promise.resolve().then(function () {
    console.log(4);
}).then(function () {
    console.log(5);
});
console.log(6);
/**
 * 几个概念:事件轮询，异步队列，主线程
 * 上述demo在事件轮询中的详细描述:
 *
 * 执行1代码,1代码不是异步放入主线程中执行                   输出1
 * 执行2代码,2代码是异步启动一个宏任务，全局flag+=1（1）
 * 执行3代码,3代码是异步启动一个宏任务，全局flag+=1（2）
 * 执行4代码,4代码是异步启动一个微任务，全局flag+=1（3）
 * 执行5代码,5代码是异步启动一个微任务，全局flag+=1（4）
 * 执行6代码,6代码不是异步放入主线程中执行                   输出6
 * 345立即执行所以被加入异步队列中
 * flag == 4说明有4个异步任务开启轮询
 * 4,5是微任务在本次轮询结束后将回调移入主线程执行            输出4 5
 * flag = flag-2
 * flag > 0说明还有异步任务开启轮询
 * 3是宏任务上次轮询结束后在本次轮询时将回调移入主线程执行     输出3
 * flag = flag-1
 * flag > 0说明还有异步任务开启轮询
 * ...
 * 100ms后2被加入异步队列中
 * 轮询检测到异步队列中有方法，但因为是宏任务继续下次轮询
 * 2是宏任务上次轮询结束后在本次轮询时将回调移入主线程执行     输出2
 * flag = flag-1
 * flag == 0没有异步任务代码执行结束
 */
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * bootcdn搜bluebird支持promise
 * 程序设计5原则
 * 1.开放封闭原则:对扩展开放对修改封闭原则
 */
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 上下文件中的引用类型解释，伪码
 *
 */
// var fooReference = {
//     base: global,
//     propertyName: 'foo'
// };
function foo() {
    alert(this.bar);
}
// var xReference = {
//     base: global,
//     propertyName: 'x'
// };
// var xbarReference = {
//     base: x,
//     propertyName: 'bar'
// };
var x = {bar: 10};
// var yReference = {
//     base: global,
//     propertyName: 'y'
// };
// var ybarReference = {
//     base: y,
//     propertyName: 'bar'
// };
var y = {bar: 20};
// var xtestReference = {
//     base: x,
//     propertyName: 'test'
// };
// var ytestReference = {
//     base: y,
//     propertyName: 'test'
// };
x.test = foo;
y.test = foo;
x.test(); // 10
y.test(); // 20
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 冻结对象的方法
 */
/**
 * freeze可读，不可写，不可扩展
 */
var foo = {x: 10};
Object.freeze(foo);
console.log(Object.isFrozen(foo)); // true
console.log(foo.x); // 10
/**
 * preventExtensions可读，可写，不可扩展
 */
var foo = {x: 10};
Object.preventExtensions(foo);
console.log(Object.isExtensible(foo)); // false
foo.x = 100;
console.log(foo.x); // 100
/**
 * defineProperty，writable: false, // 只读,configurable: false
 */
var foo = {x: 10};
Object.defineProperty(foo, "x", {
    value: 20,
    configurable: false,//能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
    enumerable: false,//对象属性是否可通过for-in循环，false为不可循环，默认值为true
    writable: false,//对象属性是否可修改,false为不可修改，默认值为true
});
foo.x = 100;
console.log(foo.x); // 20
delete foo.x; // false
/**
 * 一些属性有特定的getter / setter方法
 */
var a = new String("foo");
a.length = 10;
alert(a.length); // 3
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 读取对象值时会去隐式执行valueOf
 */
var c = {
    x: 10,
    y: 20,
    valueOf: function () {
        return this.x + this.y;
    }
};
var d = {
    x: 30,
    y: 40,
    valueOf: c.valueOf
};
alert(c + d); // 100
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 获取实例原型：ES5提供了Object.getPrototypeOf(O)方法，该方法直接返回对象的[[Prototype]]属性——实例的初始原型。
 * 然而，和__proto__相比，它只是getter，它不允许set值。
 * @type {{}}
 */
var foo = {};
Object.getPrototypeOf(foo) == Object.prototype; // true
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 块级作用域与函数声明:
 * ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明
 */
// 不合法（虽不会报错，不要这样写）
if (true) {
    function f() {
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
// <script src="script.js"></script>
// 没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
//
// <script async src="script.js"></script>
// 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
//
// <script defer src="myscript.js"></script>
// 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
//====================================================结束==============================================================