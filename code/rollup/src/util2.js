export function fn1() {
    var ss = [1, 2, 3, 4, 5]
    ss = ss.map(item => item + 1);
    console.log(ss.join(','));
};