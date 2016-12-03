import React from 'react'
import {Timer} from './Timer.js'
import {TimerButton} from './TimerButton.js'

export class App extends React.Component {

  render () {
    return (
      <div className='center-container'>
        <Timer hours={'00'} minutes={'00'} seconds={'00'} ref='timer' />
        <div className='timer-button-container'>
          <TimerButton text={'START'} handleClick={() => this.refs.timer.start()} />
          <TimerButton text={'STOP'} handleClick={() => this.refs.timer.stop()} />
          <TimerButton text={'RESET'} handleClick={() => this.refs.timer.reset()} />
        </div>
      </div>
    )
  }
}
