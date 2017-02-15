import React from 'react';

class CharacLimit extends React.Component {
  constructor() {
    super();
    this.state = {
        currentInput: ""
    };
  }
  _handleInput = (event) => {
    var value = event.target.value;
    if(value.length < this.props.limit){
      this.setState({currentInput: value})
    }
  }
  render(){
      return(
        <div>
          <input type="text" value={this.state.currentInput} onInput={this._handleInput} />
          <p>{this.state.currentInput}</p>
          <p>{this.props.limit - this.state.currentInput.length} remaining</p>
        </div>
      )
    }
  }

CharacLimit.propTypes = {
  limit: React.PropTypes.number.isRequired
}

export default CharacLimit;
