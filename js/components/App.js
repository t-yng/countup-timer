import React from 'react'
import {Timer} from './timer.js'
import {TimerButton} from './timer-button.js'

export class App extends React.Component {

  render () {
    return (
      <div className='center-container' style={{'margin-top': '100px'}}>
        <Timer hours={this.props.hours} minutes={this.props.minutes} seconds={this.props.seconds} ref='timer' />
        <div className='timer-button-container'>
          <TimerButton text={'START'} handleClick={this.props.startTimer} />
          <TimerButton text={'STOP'} handleClick={this.props.stopTimer} />
          <TimerButton text={'RESET'} handleClick={this.props.resetTimer} />
        </div>
      </div>
    )
  }
}
