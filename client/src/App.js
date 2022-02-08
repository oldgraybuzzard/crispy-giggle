import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import EmployerDashboard from './pages/EmployerDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AddEmployee from './pages/AddEmployee';
import AddCourse from './pages/AddCourse';
import NoMatch from './pages/NoMatch';
import './index.css';

const httpLink = createHttpLink({
  // uri: '/graphql',
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route 
                exact 
                path="/" 
                component={Homepage} 
              />
              <Route
                exact
                path="/employer-dashboard"
                component={EmployerDashboard}
              />
              <Route
                exact
                path="/employee-dashboard"
                component={EmployeeDashboard}
              />
              <Route 
                exact 
                path="/add-employee" 
                component={AddEmployee} 
              />
              <Route 
                exact 
                path="/add-course" 
                component={AddCourse} 
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
