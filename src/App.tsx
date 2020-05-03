import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import {Dashboard} from "./pages/Dashboard";

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
    </Router>
  );
};
