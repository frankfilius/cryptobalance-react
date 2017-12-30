import React, { Component } from 'react';
import CoinList from './components/CoinList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import Main from './components/layout/Main'
import Sidebar from './components/layout/Sidebar'
import styles from './App.css'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
