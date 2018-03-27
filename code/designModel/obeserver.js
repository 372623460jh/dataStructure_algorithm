/**
 * Created by jianghe on 2018/3/27.
 */
/**
 * 发布订阅模式
 * 调用subscribe给观察者添加方法缓存在数组中
 * 调用unsubscribe卸载观察者中的方法
 * 调用update执行观察者中的所有方法
 *
 * 执行update方法会将消息发送给所有的订阅者
 * 执行unsubscribe方法会退订消息
 *
 */
function Observer() {
    this.fns = [];
}
Observer.prototype = {
    //添加
    subscribe: function (fn) {
        this.fns.push(fn);
    },
    //卸载
    unsubscribe: function (fn) {
        this.fns = this.fns.filter(
            function (el) {
                if (el !== fn) {
                    return el;
                }
            }
        );
    },
    //执行
    update: function (o, thisObj) {
        var scope = thisObj || window;
        this.fns.forEach(
            function (el) {
                el.call(scope, o);
            }
        );
    }
};

//测试
var o = new Observer;
var f1 = function (data) {
    console.log('Robbin: ' + data + ', 赶紧干活了！');
};

var f2 = function (data) {
    console.log('Randall: ' + data + ', 找他加点工资去！');
};

o.subscribe(f1);
o.subscribe(f2);

o.update("Tom回来了！")

//退订f1
o.unsubscribe(f1);
//再来验证
o.update("Tom1回来了！");