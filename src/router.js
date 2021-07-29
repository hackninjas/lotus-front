import React from 'react';
import { LoginMobile } from 'pages/LoginMobile';
import { Privacy } from 'pages/Auth/privacy';
// import { TermsOfService } from 'pages/Auth/termsOfService';
import { Onboarding } from 'pages/Onboarding/Onboarding';
import { OnboardWithoutBvn } from 'pages/Onboarding/onboardWithoutBvn';
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
import { Otp } from 'pages/Onboarding/components/Otp';
import { Welcome } from 'pages/Onboarding/components/Welcome';
import { PersonalInformation } from 'pages/UserDashoard/PersonalInformation';
import { ForgotPassword } from 'pages/Auth/ForgotPassword';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages';
import { AdminLandingPage } from 'pages/Admin/AdminLandingPage';
import { AdminDashboard } from 'pages/Admin/AdminDashboard';
import { AdminAccountPage } from 'pages/Admin/AdminAccountPage';
import { AdminCardRequest } from 'pages/Admin/AdminCardRequest';
import AccountID from 'pages/Admin/AccountID';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginMobile} />
        <Route exact path="/login/privacy" component={Privacy} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/onboard-bvn" component={OnboardWithoutBvn} />
        <Route exact path="/password-recovery" component={ForgotPassword} />
        <Route exact path="/dashboard" component={UserDashboardMain} />
        <Route exact path="/upgrade" component={UpgradeAccount} />
        <Route exact path="/fund" component={UserFundAccount} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/verify" component={BankVerificationNumber} />
        <Route exact path="/submit" component={SubmitBvn} />
        <Route exact path="/idverify" component={IdVerifyResponse} />
        <Route exact path="/upload" component={GovernmentID} />
        <Route exact path="/other" component={OtherID} />
        <Route exact path="/address" component={AddressProof} />
        <Route exact path="/signature" component={Signature} />
        <Route exact path="/response" component={SignatureResponse} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/personal" component={PersonalInformation} />
        <Route exact path="/admin" component={AdminLandingPage} />
        <Route exact path="/admin-dashboard" component={AdminDashboard} />
        <Route exact path="/admin-accounts" component={AdminAccountPage} />
        <Route exact path="/admin-card-request" component={AdminCardRequest} />
        <Route exact path="/accounts/kelvin" component={AccountID} />
      </Switch>
    </BrowserRouter>
  );
};
