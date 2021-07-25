import API from './axios';

const routes = {
  accountLoginEmail: `/api/Onboarding/login`,
  registerAsUser: `/api/Onboarding/register_user`,
  validateBvn: `/api/Onboarding/verify_bvn`,
  openAccount: '/api/Onboarding/open_account'
};

const DEFAULT_ERROR_MESSAGE = 'An error occurred, please try again';

const getErrorMsg = error => {
  if (error) {
    if (error?.response?.data) {
      const data = error?.response?.data;
      const message = data.message;

      return message ? message : DEFAULT_ERROR_MESSAGE;
    }
  }

  return DEFAULT_ERROR_MESSAGE;
};
const getSuccessMsg = status => {
  const data = status?.response?.data;
  const message = data.message;
  localStorage.setItem('token', data.accessToken);

  return message;
};

export const loginWithEmail = async loginDetails => {
  try {
    await API.post(routes.accountLoginEmail, loginDetails);
    let message = getSuccessMsg();
    console.log(message);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const registerUser = async registerDetails => {
  try {
    await API.post(routes.registerAsUser, registerDetails);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const openAccount = async data => {
  try {
    await API.post(routes.openAccount, data);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const bvnVerify = async bvn => {
  try {
    await API.get(routes.validateBvn, { params: { bvn } });
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};
