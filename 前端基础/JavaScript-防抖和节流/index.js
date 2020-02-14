/**
 * 防抖
 * 连续触发事件但是在 n 秒内只执行一次。
 * 刷新定时器
 */
function debounce(fn, delay) {
  let timer1 = null;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}


/**
 * 节流
 * 会稀释函数的执行频率。。
 * 特点，只执行一次。
 * 设置标志位，看能否触发
 */
function throttle(fn, delay) {
  let ok = true
  return function () {
    if (!ok) return
    ok = false
    setTimeout(() => {
      fn.apply(this, arguments)
      ok = true
    }, delay)
  }
}