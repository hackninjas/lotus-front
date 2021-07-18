import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage}/>       
      </Switch>
    </BrowserRouter>
  );
};
