# Promise笔记

## 创建promise对象
- Promise对象构造方法传入一个带有resolve和reject两个参数的函数function
```javascript
var promise = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        console.log('异步操作');
    }, 2000)
});
```

## promise中resolve，reject
- Promise对象构造方法传入的function中的resolve，reject参数是用来处理成功或失败
- Promise对象总共有3中状态：
    - pending: 初始状态，不是成功或失败状态。
    - fulfilled: 意味着操作成功完成。（执行resolve状态会变为fulfilled）
    - rejected: 意味着操作失败。（执行reject状态会变为rejected）
```javascript
var promise = new Promise(function (resolve, reject) {
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
```

## promise中then，catch
- Promise实例通过then接受成功（可以连点），catch接收失败
- promise一次resolve执行会顺序触发promise实例下的所有then方法
- promise中reject,throw Erroe都会promise实例下的所有catch方法
```javascript
var promise = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('执行成功');
        } else {
            reject('失败');
        }
    }, 2000)
});
//promise实例接受成功和失败
promise.then(function (data) {
    console.log(1);
    console.log(data);
}).then(function (data) {
    console.log(2);
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
// 上述代码会打印:
// 1
// 执行成功
// 2
// 执行成功
```

## 两个promise依赖执行
- promise的then方法默认返回的是自身promise实例（从而实现then的连点）,当在then方法中添加return时,return就会根据return来变化

**现有一个这样的业务场景需要先调接口A获取用户信息,再根据接口A返回的数据调用接口B,两个接口存在依赖**
```javascript
var promise1 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('接口A');
        } else {
            reject('失败');
        }
    }, 2000)
});
//promise实例接受成功和失败
promise1.then(function (data) {
    console.log('接口A执行');
    console.log(data);
    var promise2 = new Promise(function (resolve, reject) {
        //方法体内执行异步操作如:文件读写ajax之类
        setTimeout(function () {
            let success = true;
            if (success) {
                resolve('接口B');
            } else {
                reject('失败');
            }
        }, 1500)
    });
    return promise2;
}).then(function (data) {
    console.log('接口B执行');
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
// 上述代码会打印:
// 接口A执行
// 接口A
// 接口B执行
// 接口B
```

## 两个promise顺序执行
- promise的then方法默认返回的是自身promise实例（从而实现then的连点）,当在then方法中添加return时,return就会根据return来变化

**现有一个这样的业务场景需要先调接口A和接口B获取数据,根据结果A返回数据取处理结果B返回的数据,两个接口不存在依赖，但是存在顺序**
- 以下demo虽然接口B会比接口A早返回数据但是promise可以实现异步顺序处理
```javascript
var promise1 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('接口A执行成功');
        } else {
            reject('失败');
        }
    }, 2000)
});
var promise2 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('接口B执行成功');
        } else {
            reject('失败');
        }
    }, 1500)
});
//promise实例接受成功和失败
promise1.then(function (data) {
    console.log(1);
    console.log(data);
    return promise2;
}).then(function (data) {
    console.log(2);
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
// 上述代码会打印:
// 1
// 接口A执行成功
// 2
// 接口B执行成功
```

## Promise.all方法
- all方法是Promise类下的静态方法,用于处理多个promise执行合并

**现有一个这样的业务场景渲染需要接口A和接口B数据，两个接口不存在依赖，也不存在顺序**
```javascript
var promise1 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('promise1执行成功');
        } else {
            reject('失败');
        }
    }, 1500)
});
var promise2 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('promise2执行成功');
        } else {
            reject('失败');
        }
    }, 2000)
});
Promise.all([promise1,promise2]).then(function (datas) {
    console.log(datas[0]);
    console.log(datas[1]);
}).catch(function (err) {
    console.log(err);
});
// 上述代码会打印:
// promise1执行成功
// promise2执行成功
```

## Promise.race方法
- race方法是Promise类下的静态方法,用于处理多个promise竞速

**现有一个这样的业务场景需要接口A或者接口B的数据，两个接口不存在依赖，也不存在顺序，谁先返回我就用谁的数据**
```javascript
var promise1 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('promise1执行成功');
        } else {
            reject('失败');
        }
    }, 1500)
});
var promise2 = new Promise(function (resolve, reject) {
    //方法体内执行异步操作如:文件读写ajax之类
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve('promise2执行成功');
        } else {
            reject('失败');
        }
    }, 2000)
});
Promise.race([promise1,promise2]).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
// 上述代码会打印:
// promise1执行成功
```


