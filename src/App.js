import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/about'><About /></Route>
          <Route exact path='/projects'><Projects /></Route>
          <Route exact path='/contact'><Contact /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
