import React from 'react'

export class TimerButton extends React.Component {
  render () {
    return (
      <button className='timer-button' type='button' name='button' onClick={() => this.props.handleClick()}>{this.props.text}</button>
    )
  }
}
