import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header'

import { default as Agendar } from  './Components/Views/Agendar/Index';
import { default as Solicitar } from  './Components/Views/Solicitar/Index';
import { default as Dashboard } from  './Components/Views/Dashboard/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider>
            { /* Component where are the Navigation Bar and Menu */ }
            <Header/>
            { /* App's Body */ }
            <div style = { styles.body }>
              <Route exact path="/" component = { Dashboard }/>
              <Route exact path="/dashboard" component = { Dashboard } />
              <Route exact path="/inspecciones" component = { Solicitar }/>
              <Route exact path="/agendar" component = { Agendar }/>
            </div>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

const NAV_BAR_HEIGHT = 65;
const styles = {
  body: {
    position: 'relative',
    top: NAV_BAR_HEIGHT,
  }
}

export default App;
