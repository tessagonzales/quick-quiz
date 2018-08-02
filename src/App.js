import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Answers from './components/Answers';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
              <Switch>
                <Route exact path ='/' component={Main} />
                <Route path="/answers" component={Answers} />
              </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
