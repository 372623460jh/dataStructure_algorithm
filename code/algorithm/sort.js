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
            arr.push(Math.random() * scope);
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
     *
     * 最坏执行次数n-1+n-2+...+1 = (n²-n)/2
     * 最好执行次数n-1+n-2+...+1 = (n²-n)/2
     * 时间复杂度O(n²)
     *
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
     *
     * 最坏执行次数1+2+3+...+n = (n²+n)/2
     * 最好执行次数1+1+1+...+1 = n
     * 时间复杂度O(n²)
     *
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
        for (var num = 1, len = sortArr.length; num < len; num++) {
            for (var n = num; n > 0 && sortArr[n] < sortArr[n - 1]; n--) {
                _exchange(sortArr, n - 1, n);
            }
        }
        return sortArr;
    };


    /**
     * 希尔排序（升级版插入排序）
     * [9, 5, 6, 40, 4] 偏移量h = ~~(arr.length/2)
     * 根据偏移量h就把数组拆分成了[9,6,4] [5,40] 然后分别做插入排序 [6,9,4] [5,40] 插入排序 [6,4,9] [5,40] 插入排序 [4,6,9] [5,40] 变为
     * [4, 5, 6, 40, 9] 偏移量h = ~~(h/2)
     * 根据偏移量h就把数组拆分成了[4, 5, 6, 40, 9] 然后做插入排序变为
     * [4, 5, 6, 9, 40]
     *
     * 时间复杂度O(n1²)
     *
     * @param array
     */
    function hillSort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }
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
        return sortArr;
    }

    /**
     * 自顶向下递归归并排序
     */
    function mergerSort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }

        /**
         * 按照大小关系合并两个数组
         * @param arr1
         * @param arr2
         */
        function merger(arr1, arr2) {
            var newarr = [];
            while (arr1.length && arr2.length) {
                if (arr1[0] < arr2[0]) {
                    newarr.push(arr1.shift());
                } else {
                    newarr.push(arr2.shift());
                }
            }
            return newarr.concat(arr1, arr2);
        }

        /**
         * 将数组拆分成两个
         * @param groupArr
         * @return {*}
         */
        function group(groupArr) {
            if (groupArr.length === 1) {
                return groupArr;
            }
            var l = ~~(groupArr.length / 2),
                left = groupArr.slice(0, l),
                right = groupArr.slice(l, groupArr.length);
            return merger(group(left), group(right));
        }

        sortArr = group(sortArr);
        return sortArr;
    }

    /**
     * 递归归并排序优化（使用插入排序处理小规模的排序减少marger方法的递归调用次数）
     */
    function mergerInsertSort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }

        /**
         * 按照大小关系合并两个数组
         * @param arr1
         * @param arr2
         */
        function merger(arr1, arr2) {
            var newarr = [];
            while (arr1.length && arr2.length) {
                if (arr1[0] < arr2[0]) {
                    newarr.push(arr1.shift());
                } else {
                    newarr.push(arr2.shift());
                }
            }
            return newarr.concat(arr1, arr2);
        }

        /**
         * 将数组拆分成两个
         * @param groupArr
         * @return {*}
         */
        function group(groupArr) {
            var l = ~~(groupArr.length / 2);
            if (l > 15) {
                var ar1 = group(groupArr.slice(0, l));
                var ar2 = group(groupArr.slice(l, groupArr.length));
                return merger(ar1, ar2);
            } else if (l > 0) {
                var ar1 = insertSort(groupArr.slice(0, l));
                var ar2 = insertSort(groupArr.slice(l, groupArr.length));
                return merger(ar1, ar2);
            } else {
                return groupArr;
            }
        }

        sortArr = group(sortArr);
        return sortArr;
    }

    /**
     * 快速排序
     * @param array
     */
    function quicksort(array) {
        var sortArr;
        if (array && {}.toString.call(array) === '[object Array]') {
            sortArr = array.slice(0);
        } else {
            sortArr = arr.slice(0);
        }

        function quick(fastArr) {
            if (fastArr.length <= 1) {
                return fastArr;
            }
            // 基准值
            var pivotIndex = ~~(fastArr.length / 2);
            // 从原数组中剔除基准值
            var pivot = fastArr.splice(pivotIndex, 1)[0];

            // 分别生成大于和小于基准值的两个数组
            var left = [];
            var right = [];
            for (var n = 0, l = fastArr.length; n < l; n++) {
                if (fastArr[n] > pivot) {
                    right.push(fastArr[n]);
                } else {
                    left.push(fastArr[n]);
                }
            }
            return quick(left).concat([pivot], quick(right));
        }

        return quick(sortArr);
    }


    randomArr(500000, 100);
    // setTimeout(function () {
    //     console.time('insertSort');
    //     insertSort();
    //     console.timeEnd('insertSort');
    // }, 1);
    // setTimeout(function () {
    //     console.time('chooseSort');
    //     chooseSort();
    //     console.timeEnd('chooseSort');
    // }, 1);
    setTimeout(function () {
        console.time('hillSort');
        hillSort();
        // console.log('res:' + hillSort());
        console.timeEnd('hillSort');
    }, 1);
    setTimeout(function () {
        console.time('mergerSort');
        mergerSort();
        console.timeEnd('mergerSort');
    }, 1);
    setTimeout(function () {
        console.time('mergerInsertSort');
        mergerInsertSort();
        console.timeEnd('mergerInsertSort');
    }, 1);
    setTimeout(function () {
        console.time('quicksort');
        quicksort();
        // console.log('res:' + quicksort());
        console.timeEnd('quicksort');
    }, 1);


})(this);