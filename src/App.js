import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import Main from './components/presentational/Main'
import Sidebar from './components/presentational/Sidebar'
import styles from './App.css'

const theme = createMuiTheme()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
