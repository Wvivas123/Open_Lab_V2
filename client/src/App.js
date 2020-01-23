import React, { Component } from 'react';
import './App.css';
import Upload from './components/Upload/Upload';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Card">
          <Upload />
        </div>
      </div>
    );
  }
}

export default App;
