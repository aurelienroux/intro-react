import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

import ImgCap from "./ImageCaption.js"
import Layout from "./Layout.js"
import GuessTheNumber from "./GuessTheNumber.js"
import ClickBtn from "./YouClicked.js"
import CharacCount from "./CharacterCounter.js"
import CharacLim from "./CharacterLimit.js"
import GuessGame from "./GuessNumberGame.js"

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Intro Workshop</h2>
        </div>

        <div>
          <h2>Testing Image Caption</h2>
          <ImgCap source="http://i.imgur.com/D8JWn.jpg" text="Weird Cat!"/>
          <ImgCap source="https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067" text="fur?" />
          <hr/>
        </div>

        <div>
          <h2>List of Items</h2>
            {
              imageList.map(image =>
                <ImgCap source={image.source} alt={image.text} text={image.text} key={image.id} /> )
            }
          <hr/>
        </div>

        <div>
          <h2>Layout</h2>
          <Layout>
            <h3>About Us</h3>
            <p>We are <a href="https://facebook.github.io/react/" target="_blank">React</a> developers</p>
          </Layout>
          <hr/>
        </div>

        <div>
          <h2>Guess The Number Game</h2>
          <GuessTheNumber number={50} />
          <hr/>
        </div>

        <div>
          <h2>You Clicked</h2>
          <ClickBtn />
          <hr/>
        </div>

        <div>
          <h2>Character Counter</h2>
          <CharacCount />
          <hr/>
        </div>

        <div>
          <h2>Character Limit</h2>
          <CharacLim limit={30}/>
          <hr/>
        </div>

        <div>
          <h2>Guess Game</h2>
          <GuessGame />
          <hr/>
        </div>

      </div>
    );
  }
}

export default App;
