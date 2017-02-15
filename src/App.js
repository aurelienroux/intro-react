import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgCap from "./ImageCaption.js"
var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

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
          <hr/>
        </div>
        <div>
          <h2>List of Items</h2>
          {
            imageList.map( (ele, i) => <ImgCap key={i} source={ele.source} alt={ele.text} text={ele.text}/> )
          }
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
