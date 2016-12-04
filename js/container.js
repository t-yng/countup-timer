import {connect} from 'react-redux'

import {App} from './components/app.js'
import * as action from './action.js'

/**
 * reduxで管理しているstateをreact側に渡す
 * @param state reduxのstoreで管理されている状態
 * @return react側で使う状態 this.prorpsで参照
 */
function mapStateToProps (state) {
  return state
}

/**
 * reactで受け取るユーザーアクションとreduxのアクションを連携させる
 * @param dispatch reduxのreducerにアクションを渡す関数
 */
function mapDispatchToProps (dispatch) {
  let timerID

  return {
    startTimer: () => {
      timerID = setInterval(() => dispatch(action.updateTimer()), 1000)
    },
    stopTimer: () => clearInterval(timerID),
    resetTimer: () => dispatch(action.resetTimer())
  }
}

// 上記で定義した関数を使って、ReduxとReactのコンポーネントを繋げる
export default connect(mapStateToProps, mapDispatchToProps)(App)
