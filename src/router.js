import { Onboarding } from 'pages/Onboarding/Onboarding';
import { UserDashboardMain } from 'pages/UserDashoard/UserDashboardMain';
import { UserFundAccount } from 'pages/UserDashoard/UserFundAccount';
import { UpgradeAccount } from 'pages/UserDashoard/UpgradeAccount';
import { BankVerificationNumber } from 'pages/UserDashoard/BankVerificationNumber';
import { SubmitBvn } from 'pages/UserDashoard/SubmitBvn';
import { IdVerifyResponse } from 'pages/UserDashoard/IdverifyResponse';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/dashboard" component={UserDashboardMain} />
        <Route exact path="/upgrade" component={UpgradeAccount} />
        <Route exact path="/fund" component={UserFundAccount} />
        <Route exact path="/verify" component={BankVerificationNumber} />
        <Route exact path="/submit" component={SubmitBvn} />
        <Route exact path="/idverify" component={IdVerifyResponse} />
      </Switch>
    </BrowserRouter>
  );
};
