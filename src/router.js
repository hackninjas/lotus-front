import { Onboarding } from 'pages/Onboarding/Onboarding';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage, Bvn, Otp, PersonInfo } from './pages';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/bvn" component={PersonInfo} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/onboarding" component={Onboarding}/>
      </Switch>
    </BrowserRouter>
  );
};
