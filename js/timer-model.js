/**
 * タイマーの時間を1秒進める
 * @param state タイマーの時間の状態
 * @return 1秒時間を進めた新しい状態
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
    time: time
  }
}

/**
 * タイマーの初期状態を返す
 * @return タイマーの初期状態
 */
export function reset () {
  return initialState()
}

/**
 * タイマーの初期状態
 */
export function initialState () {
  return {
    hours: '00',
    minutes: '00',
    seconds: '00',
    time: 0
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
