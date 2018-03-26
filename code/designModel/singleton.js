/**
 * 单例设计模式
 * 单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，
 * 如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。
 */
var Singleton = (function () {
    var instance;

    /**
     * 初始化实例方法
     */
    function init() {
        // 私有部分
        var privateVariable = 'something private';

        function showPrivate() {
            console.log(privateVariable);
        }

        return {
            publicMethod: function () {
                showPrivate();
            },
            publicVar: 'the public can see this!'
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init()
            }
            return instance;
        }
    }

})();