import { LoginMobile } from 'pages/LoginMobile';
import { Onboarding } from 'pages/Onboarding/Onboarding';
import { UserDashboardMain } from 'pages/UserDashoard/UserDashboardMain';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/onboarding" component={Onboarding}/>
        <Route exact path="/dashboard" component={UserDashboardMain}/>
        <Route exact path="/login" component={LoginMobile}/>
      </Switch>
    </BrowserRouter>
  );
};
