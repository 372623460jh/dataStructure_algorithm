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
