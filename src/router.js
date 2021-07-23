import { LoginMobile } from 'pages/LoginMobile';
import { Onboarding } from 'pages/Onboarding/Onboarding';
import { UserDashboardMain } from 'pages/UserDashoard/UserDashboardMain';
import { UserFundAccount } from 'pages/UserDashoard/UserFundAccount';
import { UpgradeAccount } from 'pages/UserDashoard/UpgradeAccount';
import { BankVerificationNumber } from 'pages/UserDashoard/BankVerificationNumber';
import { SubmitBvn } from 'pages/UserDashoard/SubmitBvn';
import { IdVerifyResponse } from 'pages/UserDashoard/IdverifyResponse';
import { GovernmentID } from 'pages/UserDashoard/GovernmentID';
import { OtherID } from 'pages/UserDashoard/OtherID';
import { AddressProof } from 'pages/UserDashoard/AddressProof';
import { SignatureResponse } from 'pages/UserDashoard/SignatureResponse';
import { Signature } from 'pages/UserDashoard/Signature';
import {Welcome} from "pages/Onboarding/components/Welcome"
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/login" component={LoginMobile}/>
        <Route exact path="/dashboard" component={UserDashboardMain} />
        <Route exact path="/upgrade" component={UpgradeAccount} />
        <Route exact path="/fund" component={UserFundAccount} />
        <Route exact path="/verify" component={BankVerificationNumber} />
        <Route exact path="/submit" component={SubmitBvn} />
        <Route exact path="/idverify" component={IdVerifyResponse} />
        <Route exact path="/upload" component={GovernmentID} />
        <Route exact path="/other" component={OtherID} />
        <Route exact path="/address" component={AddressProof} />
        <Route exact path="/signature" component={Signature} />
        <Route exact path="/response" component={SignatureResponse} />
        {/* {/* <Route exact path="/onboarding" component={Onboarding}/> */}
        <Route exact path="/welcome" component={Welcome}/> 
      </Switch>
    </BrowserRouter>
  );
};
