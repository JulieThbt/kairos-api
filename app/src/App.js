import React, { Component } from 'react';
import './App.css';
import ImgUpload from './ImgUpload.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <ImgUpload></ImgUpload>
      </div>
    );
  }
}

export default App;
