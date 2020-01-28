import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './components/Upload/Upload';
import Navbar from './components/navbar';
import Landing from './components/Landing/Landing';
import List from './components/List /List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/list" component={List} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
