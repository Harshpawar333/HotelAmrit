import React from 'react';
import '../assets/styles/sass/index.scss';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
