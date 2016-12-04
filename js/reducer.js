import * as timerModel from './timer-model.js'

/**
 * Reduxのreducer タイマーの時間の状態遷移を処理する
 * @param state Reduxのstoreで管理されている状態
 * @param action ユーザーアクション
 * @return actionに応じて変化させた新しい状態
 */
export function timer (state = timerModel.initialState(), action) {
  switch (action.type) {
    case 'UPDATE_TIMER':
      return timerModel.update(state)
    case 'RESET_TIMER':
      return timerModel.reset()
    default:
      return state
  }
}
