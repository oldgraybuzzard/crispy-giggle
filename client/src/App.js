import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <LoginContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout }}
    >
      <Router>
        <Header />
        <main>
          <Switch></Switch>
        </main>
      </Router>
      <Footer />
    </LoginContext.Provider>
  );
}

export default App;
