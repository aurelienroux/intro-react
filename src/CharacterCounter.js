import React from 'react';

class CharacCount extends React.Component {
  constructor() {
    super();
    this.state = {
        currentInput: ""
    };
  }
  _handleInput = (e) => {
    var value = e.target.value;
    this.setState({currentInput: value.length})
  }
  render(){
      return(
        <div>
          <input type="text" onInput={this._handleInput} />
          <p>{this.state.currentInput}</p>
        </div>
      )
    }
  }

export default CharacCount;
