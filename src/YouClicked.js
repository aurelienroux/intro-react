import React from 'react';

class ClickBtn extends React.Component {
  state = {
    num: "you never clicked",
    reset: 0
  }
  _handleButtonClick = () => {
    var val = this.state.num
    if( val === "you never clicked"){
      this.setState({num: "you clicked once"})
    } else if( val === "you clicked once"){
      this.setState({num: 2})
    } else (
      this.setState({num: val + 1})
    )
  }

  _reset = () => {
    this.setState({reset: this.state.reset + 1})
  }

  render(){
    if(this.state.reset === 0) {
      return(
        <div>
          <input type="button" value="Click Me!" onClick={this._handleButtonClick} />
          <input type="button" value="Reset Me!" onClick={this._reset} />
          <p>{this.state.num}</p>
        </div>
      )
    } else {
      return(
        <div>
          <input type="button" value="Click Me!" onClick={this._handleButtonClick} />
          <input type="button" value="Reset Me!" onClick={this._reset} />
          <p>{this.state.num}</p>
          <p>You reseted {this.state.reset} times</p>
        </div>
      )
    }
  }
}

export default ClickBtn;
