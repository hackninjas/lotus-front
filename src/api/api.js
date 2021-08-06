import API from './axios';
import { useHistory } from 'react-router-dom'

const routes = {
  accountLoginEmail: `/api/Onboarding/login`,
  registerAsUser: `/api/Onboarding/register_user`,
  googleAuth: `/api/Onboarding/thirdparty_auth`
};

const DEFAULT_ERROR_MESSAGE = 'An error occurred, please try again';

const getErrorMsg = error => {

  if(error){
    if(error?.response?.data){
      const data = error?.response?.data;
      const message = data.message;

      return message ? message : DEFAULT_ERROR_MESSAGE
    }
  }

  return DEFAULT_ERROR_MESSAGE;
};
const getSuccessMsg = status => {

      const data = status?.response?.data;
      const message = data.message;
      localStorage.setItem('token', data.accessToken);

      return message 
};

export const loginWithEmail = async loginDetails => {
  try {
    await API.post(routes.accountLoginEmail, loginDetails);
    let message = getSuccessMsg()
    console.log(message)
  } catch (error) {
    console.log(error)
    // let message = getErrorMsg(error);
    // throw new Error(message);
  }
};

export const registerUser = async registerDetails => {
  try {
    await API.post(routes.registerAsUser, registerDetails);
  } catch (error) {
    console.log(error)
    // let message = getErrorMsg(error);
    // throw new Error(message)
  }
};

export const verifyBVN = async bvnNumber => {
  try {
    await API.get(`/api/Onboarding/verify_bvn?bvn=${bvnNumber}`);
  } catch (error) {
    
    // let message = getErrorMsg(error);
    // throw new Error(message)
  }
};

export const googleAuth = async payload => {
  try {
    await API.post(routes.googleAuth, payload);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message)
  }
};


