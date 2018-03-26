//什么时候使用工厂模式
//   以下几种情景下工厂模式特别有用：
//   对象的构建十分复杂
//   需要依赖具体环境创建不同实例
//   处理大量具有相同属性的小对象
//
//什么时候不该用工厂模式
//   不滥用运用工厂模式，有时候仅仅只是给代码增加了不必要的复杂度，同时使得测试难以运行下去。
(function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory(global, {}); // CommonJS
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);//amd
    } else {
        global.test111 = factory(global, {});
    }
}(this, (function (global, obj, undefined) {
    'use strict';
    function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.output = function () {
            return this.model + "走了" + this.miles + "公里";
        };
    }

    return obj = new Car("大叔", 2009, 20000);
})));
