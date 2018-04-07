export default {
    fun1: function (test) {
        var a = { test: '123', test1: '345' };
        for (let item in a) {
            console.log(item);
        }
        console.log(item);//可以读出item
        console.log(sss);
    },
    fun: function (mess) {
        console.log(mess);
    }
}
