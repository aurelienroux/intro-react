import React from 'react';

class GuessTheNumber extends React.Component {
  handleButtonClick = () => {
    if(this.props.number > this.refs.userGuess.value){
      alert("Too low")
    } else if (this.props.number < this.refs.userGuess.value){
      alert("Too high")
    } else {
      alert("You win!")
    }
  }

  render(){
    return(
      <div>
        <p>Guess a number between 1 and 100</p>
        <input type="number" ref="userGuess" />
        <input type="button" value="GUESS" onClick={this.handleButtonClick} />
      </div>
    )
  }
}

export default GuessTheNumber;
