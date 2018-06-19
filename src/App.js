import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Navbar from './components/NavBar';
import Toastmasters from './components/Toastmasters';
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/toastmasters" component={Toastmasters} />
          <Route path="/menu" component={Menu} />
        </div>
      </Router>

    );
  }
}

export default App;
