(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    var u1 = {
        fun1: function fun1(test) {
            console.log(test);
        }
    };

    function fn1() {
        var ss = [1, 2, 3, 4, 5];
        ss = ss.map(function (item) {
            return item + 1;
        });
        console.log(ss.join(','));
    }
    function fn2() {
        console.log('fn2');
    }

    u1.fun1('u1.fun1');
    fn1();
    fn2();

})));
