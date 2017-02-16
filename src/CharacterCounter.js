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
          <input type="text" onInput={this._handleInput} style={{margin: 20}}/>
          <span>{this.state.currentInput}</span>
        </div>
      )
    }
  }

export default CharacCount;
