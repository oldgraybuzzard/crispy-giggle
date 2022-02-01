import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './index.css';

import Footer from './components/Footer';
import Header from './components/Header';
import { LoginContext } from './context/login-context';
function App() {
  // array destructuring to set is logged in state with initial false state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // login function wrapped with useCallback so that is not recreated to avoid infinite loops
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
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
