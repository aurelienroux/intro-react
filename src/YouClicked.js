import React from 'react';

class ClickBtn extends React.Component {
  state = {
    num: "you never clicked"
  }
  _handleButtonClick = () => {
    var val = this.state.num
    if( this.state.num === "you never clicked"){
      this.setState({num: "you clicked once"})
    } else if( this.state.num === "you clicked once"){
      this.setState({num: 2})
    } else (
      this.setState({num: val + 1})
    )
  }

  _reset = () => {
    this.setState({num: "you never clicked"})
  }

  render(){
    return(
      <div>
        <input type="button" value="Click Me!" onClick={this._handleButtonClick} />
        <input type="button" value="Reset Me!" onClick={this._reset} />
        <p>{this.state.num}</p>
      </div>
    )
  }
}

export default ClickBtn;
