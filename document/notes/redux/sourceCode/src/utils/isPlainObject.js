/**
 * 判断一个对象是否普通的对象（简单来说就是没有多层继承关系的对象）
 * @param obj
 * @return {boolean}
 */
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let proto = obj;
  // 循环取出最后一层原型
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  // 判断obj的最后一层原型是否等于其第一层原型，简单来说就是没有多层继承关系的对象，原型链就只有一层
  return Object.getPrototypeOf(obj) === proto;
}
