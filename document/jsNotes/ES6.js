//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================








//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================//====================================================开始==============================================================
/**
 * ES6模块化
 * default关键字会返回export的整体
 * 不使用default关键字会在所有的export上包装一层对象
 */
// test1.js
export default {
    a: 100
};

// test2.js
export function fun1() {
    console.log(1);
}
export function fun2() {
    console.log(2);
}

// test3.js 引入时
import test1 from 'test1' //test1就是{a: 100}
import {fn1, fn2} from 'test2' //返回的是{fn1:...,fn2:...}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * 语法糖的概念
 * 将js传统的方法包装成类似java的语法就叫做语法糖
 */
// 以下是ES6 class语法糖就是将es5 funcction构造方式的方式写成类java方式
class Fruit {
    constructor() {
        this.name;
    }

    say(name) {
        console.log(name);
    }
}
//====================================================结束==============================================================

//====================================================开始==============================================================
/**
 * ES6 proxy代理
 * @type {{a: number, b: number}}
 */
let obj = {
    a: 1,
    b: 2,
}
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : '值不存在';
    },
    set: function (target, name, value) {
        name in target ? target[name] = value : target[name] = 37;
    }
};
//p就是生成的代理对象
let p = new Proxy(obj, handler);
p.a = 1;
p.b = undefined;
p.d = 9999;
console.log(p.a, p.b, p.d);    // 1, undefined,37
console.log('c' in p, p.c);    // false, 值不存在
//====================================================结束==============================================================