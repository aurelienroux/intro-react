import React from 'react';

class GuessGame extends React.Component {
  state = {
    randomNum: (Math.floor(Math.random() * 100) +1),
    usersGuesses: "",
    Chances: 5,
    guess: null
  }

  handleButtonClick = () => {
    var val = this.refs.userGuess.value
    if( val < this.state.randomNum ){
      this.setState({
        Chances: this.state.Chances - 1,
        usersGuesses: this.state.usersGuesses + val + ", ",
        guess: "low",
        val: ""
      })
    } else if( val > this.state.randomNum ){
      this.setState({
        Chances: this.state.Chances - 1,
        usersGuesses: this.state.usersGuesses + val + ", ",
        guess: "high",
        val: ""
      })
    } else {
      this.setState({
        Chances: this.state.Chances - 1,
        usersGuesses: this.state.usersGuesses + val + ", ",
        guess: "win"
      })
    }
  }

  restart= () => {
    this.setState({
      Chances: 5,
      usersGuesses: " ",
      guess: " ",
      val: " "
    })
  }

  render(){
    if (this.state.Chances === 0){
      return(
        <div>
          <h4>you loose...</h4>
          <input type="button" value="try again" onClick={this.restart} />
        </div>
      )
    } else if(this.state.guess === "high"){
      return(
        <div>
          <h3>Guess a number between 1 and 100</h3>
          <p>Too high, try again</p>
          <input type="number" ref="userGuess" />
          <input type="button" value="Guess" onClick={this.handleButtonClick} />
          <p>You have {this.state.Chances} chances remaining</p>
          <p>You already tried {this.state.usersGuesses}</p>
        </div>
      )
    } else if(this.state.guess === "low"){
      return(
        <div>
          <h3>Guess a number between 1 and 100</h3>
          <p>Too low, try again</p>
          <input type="number" ref="userGuess" />
          <input type="button" value="Guess" onClick={this.handleButtonClick} />
          <p>You have {this.state.Chances} chances remaining</p>
          <p>You already tried {this.state.usersGuesses}</p>
        </div>
      )
    } else if (this.state.guess === "win"){
      return(
        <div>
          <h3>YOU WON!!!</h3>
          <input type="button" value="try again" onClick={this.restart} />
          <p>You tried {this.state.usersGuesses}</p>
        </div>
      )
    } else {
      return(
        <div>
          <h3>Guess a number between 1 and 100</h3>
          <input type="number" ref="userGuess" />
          <input type="button" value="Guess" onClick={this.handleButtonClick} />
          <p>You have {this.state.Chances} chances remaining</p>
        </div>
      )
    }
  }
}

export default GuessGame;
