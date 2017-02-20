import React from 'react';

class GuessTheNumber extends React.Component {

  handleButtonClick = (e) => {
    e.preventDefault();
    if(this.props.number > this.refs.userGuess.value){
      alert("Too low")
    } else if (this.props.number < this.refs.userGuess.value){
      alert("Too high")
    } else {
      alert("You win!")
    }
    this.refs.userGuess.value = "";
  }

  render(){
    return(
      <div>
        <p>Guess a number between 1 and 100</p>
        <form onSubmit={this.handleButtonClick}>
          <input type="number" ref="userGuess" />
          <input type="button" value="GUESS" />
        </form>
      </div>
    )
  }
}

export default GuessTheNumber;
