/**
 * 构造器模式
 * 使用构造方法构造实例额模式 new
 */
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.output = function () {
        return this.model + "走了" + this.miles + "公里";
    };
}

var tom1 = new Car("大叔", 2009, 20000);

/**
 * 不使用new关键字
 */
function Car(model, year, miles) {
    return new RealCar(model, year, miles);
}

function RealCar(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.output = function () {
        return this.model + "走了" + this.miles + "公里";
    };
}

var tom2 = Car("大叔", 2009, 20000);
var tom3 = new Car("大叔", 2009, 20000);

/**
 * 强制使用new关键字
 */
function Car(model, year, miles) {
    if (!(this instanceof Car)) {
        throw new Error('请使用new关键字');
    }
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.output = function () {
        return this.model + "走了" + this.miles + "公里";
    };
}
var tom2 = Car("大叔", 2009, 20000);//报错