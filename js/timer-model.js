export class TimerModel {

  static INITIAL_STATE () {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
      time: 0
    }
  }

  reset () {
    return TimerModel.INITIAL_STATE()
  }

  /**
   * タイマーの時間を1秒進める
   * @param state タイマーの時間の状態
   * @return 1秒時間を進めた新しい状態
   */
  update (state) {
    const time = state.time + 1
    const hours = this.toHours(time)
    const minutes = this.toMinutes(time)
    const seconds = this.toSeconds(time)

    return {
      hours: this.toText(hours),
      minutes: this.toText(minutes),
      seconds: this.toText(seconds),
      time: time
    }
  }

  toHours (time) {
    return parseInt(time / 60 / 60)
  }

  toMinutes (time) {
    return parseInt(time / 60 % 60)
  }

  toSeconds (time) {
    return time % 60
  }

  toText (time) {
    return ('00' + time).slice(-2)
  }
}
