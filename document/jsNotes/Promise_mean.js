/**
 * Promise对象构造方法传入一个带有resolve和reject两个参数的函数function
 * @type {Promise}
 */
var promise1 = new Promise(function (resolve, reject) {
});


/**
 * Promise对象构造方法传入的function中的方法体用来处理异步操作
 * @type {Promise}
 */
var promise2 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        console.log('异步操作');
    }, 2000)
});

/**
 * Promise对象构造方法传入的function中的resolve，reject参数是用来处理成功或失败
 * Promise对象总共有3中状态：
 *      pending: 初始状态，不是成功或失败状态。
 *      fulfilled: 意味着操作成功完成。（执行resolve状态会变为fulfilled）
 *      rejected: 意味着操作失败。（执行reject状态会变为rejected）
 * @type {Promise}
 */
var promise3 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            console.log('成功');
            resolve('成功');//fulfilled
        } else {
            console.log('失败');
            reject('失败');//rejected
        }
    }, 2000)
});

/**
 * 当异步执行完成，执行了resolve方法就会进Promise对象的then方法
 *               执行了reject方法就会进Promise对象的catch方法
 * promise对象的resolve，reject之中只要有一个被执行其他都将失效
 */
promise3.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});


/**
 * await关键字阻塞promise对象使promise变为同步
 * await只能在async关键字申明的异步方法中使用
 * await等待的虽然是promise对象，但不必写.then()，直接可以得到resolve的返回值。
 * 捕获错误用try catch
 */
function asyncfun() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let success = true;
            if (success) {
                // console.log('成功');
                resolve('成功asdasd');//fulfilled
            } else {
                // console.log('失败');
                reject('失败123123');//rejected
            }
        }, 2000)
    });
}

/**
 * 不使用async，await
 */
(function ss() {
    console.log('开始');
    asyncfun();
    console.log('结束');
    // 开始
    // 结束
    // 成功
})();

/**
 * 使用async，await
 */
(async function ss() {
    console.log('开始');
    try {
        //直接可以得到resolve的返回值。
        let succ = await asyncfun();
        console.log(succ);
    } catch (err) {
        //直接可以得到reject的返回值。
        console.log(err);
    }
    console.log('结束');
})();

'use strict';

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }

            return step("next");
        });
    };
}

function asyncfun(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = true;
            if (success) {
                resolve('成功');
            } else {
                reject('失败');
            }
        }, time);
    });
}
/**
 * 使用async，await
 */
var load = function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var succ, succ1;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('开始');
                        _context.prev = 1;
                        _context.next = 4;
                        return asyncfun(2000);

                    case 4:
                        succ = _context.sent;

                        console.log('2000' + succ);
                        _context.next = 8;
                        return asyncfun(1500);

                    case 8:
                        succ1 = _context.sent;

                        console.log('1500' + succ1);
                        _context.next = 15;
                        break;

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](1);

                        //直接可以得到reject的返回值。
                        console.log(_context.t0);

                    case 15:
                        console.log('结束');

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 12]]);
    }));

    return function load() {
        return _ref.apply(this, arguments);
    };
}();
load();
