import React, { Component } from 'react';
import CoinList from './components/CoinList'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinList />
      </div>
    );
  }
}

export default App;
