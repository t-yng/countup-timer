/**
 * タイマーの状態を開始状態に変更する
 * @param state タイマーの状態
 * @param {number} intervalID setInterval()で得られたID
 * @return タイマーの開始状態
 */
export function start (state, intervalID) {
  return {
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    time: state.time,
    intervalID: intervalID
  }
}

/**
 * タイマーの状態を停止状態に変更する
 * @param state タイマーの状態
 * @return タイマーの停止状態
 */
export function stop (state) {
  clearInterval(state.intervalID)

  return {
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    time: state.time,
    intervalID: -1
  }
}

/**
 * タイマーの時間を1秒進める
 * @param state タイマーの時間の状態
 * @return 時間を1秒進めた新しい状態
 */
export function update (state) {
  const time = state.time + 1
  const hours = toHours(time)
  const minutes = toMinutes(time)
  const seconds = toSeconds(time)

  return {
    hours: toText(hours),
    minutes: toText(minutes),
    seconds: toText(seconds),
    time: time,
    intervalID: state.intervalID
  }
}

/**
 * タイマーの時間をリセットする
 * @return タイマーの初期状態
 */
export function reset (state) {
  return {
    hours: '00',
    minutes: '00',
    seconds: '00',
    time: 0,
    intervalID: state.intervalID
  }
}

/**
 * タイマーの初期状態
 */
export function initialState () {
  return {
    hours: '00',
    minutes: '00',
    seconds: '00',
    time: 0,
    intervalID: -1
  }
}

function toHours (time) {
  return parseInt(time / 60 / 60)
}

function toMinutes (time) {
  return parseInt(time / 60 % 60)
}

function toSeconds (time) {
  return time % 60
}

function toText (time) {
  return ('00' + time).slice(-2)
}
