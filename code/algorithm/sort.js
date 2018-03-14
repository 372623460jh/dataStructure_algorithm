/**
 * 排序算法
 * Created by jianghe on 2018/3/14.
 */
!(function (global) {

    'use stract';
    var arr = [];

    /**
     * 随机生成一个长度为length的整数数组
     * @param length
     */
    function randomArr(length, scope) {
        arr = [];
        for (var n = 0; n < length; n++) {
            arr.push(~~(Math.random() * scope));
        }
        return arr;
    };

    /**
     * 交换数组中的两项
     */
    function _exchange(arr, index1, index2) {
        var tem = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tem;
    }

    /**
     * 选择排序:选出最小放到未排序部分的头部（对所有数组排序执行次数都一样）
     * [4, 9, 5, 6, 40, 65, 92, 14] =>4
     * [4, 5, 9, 6, 40, 65, 92, 14] =>5
     * [4, 5, 6, 9, 40, 65, 92, 14] =>6
     * [4, 5, 6, 9, 40, 65, 92, 14] =>9
     * [4, 5, 6, 9, 14, 40, 65, 92] =>14
     * [4, 5, 6, 9, 14, 40, 65, 92] =>40
     * [4, 5, 6, 9, 14, 40, 65, 92] =>65
     * [4, 5, 6, 9, 14, 40, 65, 92] =>92
     * @param array
     * @return {*}
     */
    function chooseSort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }
        console.time('chooseSort');
        for (var num = 0, len = sortArr.length; num < len; num++) {
            var minObj = {
                index: num,
                value: sortArr[num]
            };
            for (var n = num + 1, l = sortArr.length; n < l; n++) {
                // 找出最小
                if (sortArr[n] < minObj.value) {
                    minObj.index = n;
                    minObj.value = sortArr[n];
                }
            }
            _exchange(sortArr, num, minObj.index);
        }
        console.timeEnd('chooseSort');
        return sortArr;
    };

    /**
     * 插入排序:取出未排序的首个元素与已经排过序的部分比较，插入合适位置（插入排序特别适用部分有序数组的排序）
     * [9, 5, 6, 40, 4, 65, 92, 14] =>9
     * [5, 9, 6, 40, 4, 65, 92, 14] =>5
     * [5, 6, 9, 40, 4, 65, 92, 14] =>6
     * [5, 6, 9, 40, 4, 65, 92, 14] =>40
     * [4, 5, 6, 9, 40, 65, 92, 14] =>4
     * [4, 5, 6, 9, 40, 65, 92, 14] =>65
     * [4, 5, 6, 9, 40, 65, 92, 14] =>92
     * [4, 5, 6, 9, 14, 40, 65, 92] =>14
     * @param array
     * @return {*}
     */
    function insertSort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }
        console.time('insertSort');
        for (var num = 1, len = sortArr.length; num < len; num++) {
            for (var n = num; n > 0 && sortArr[n] < sortArr[n - 1]; n--) {
                _exchange(sortArr, n - 1, n);
            }
        }
        console.timeEnd('insertSort');
        return sortArr;
    };


    /**
     * 希尔排序（升级版插入排序）
     * [9, 5, 6, 40, 4] 偏移量h = ~~(arr.length/2)
     * 根据偏移量h就把数组拆分成了[9,6,4] [5,40] 然后分别做插入排序 [6,9,4] [5,40] 插入排序 [6,4,9] [5,40] 插入排序 [4,6,9] [5,40] 变为
     * [4, 5, 6, 40, 9] 偏移量h = ~~(h/2)
     * 根据偏移量h就把数组拆分成了[4, 5, 6, 40, 9] 然后做插入排序变为
     * [4, 5, 6, 9, 40]
     * @param array
     */
    function hillSort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }
        console.time('hillSort');
        //希尔排序的增量
        var h = sortArr.length;
        while (h >= 1) {
            h = ~~(h / 2);
            for (var n = h; n < sortArr.length; n++) {
                for (var s = n; s > 0 && sortArr[s] < sortArr[s - h]; s -= h) {
                    _exchange(sortArr, s - h, s);
                }
            }
        }
        console.timeEnd('hillSort');
        return sortArr;
    }


    randomArr(50000000, 100);
    // setTimeout(function () {
    //     insertSort();
    // }, 1);
    // setTimeout(function () {
    //     chooseSort();
    // }, 1);
    setTimeout(function () {
        hillSort();
    }, 1);


})(this);