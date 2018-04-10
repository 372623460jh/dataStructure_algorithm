/**
 * 抛错异常的方法
 * @param message
 */
export default function warning(message) {
  // 如果有console.error使用console.error输出错误
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  // 并使用throw new Error(message)的方式抛出错误
  try {
    throw new Error(message);
  } catch (e) {
  }
}
