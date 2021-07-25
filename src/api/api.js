import API from './axios';

const routes = {
  accountLoginEmail: `/api/Onboarding/login`,
  registerAsUser: `/api/Onboarding/register_user`,
  validateBvn: `/api/Onboarding/verify_bvn`,
  passwordResetLink: `/api/Onboarding/reset_link`,
  passwordReset: `/api/Onboarding/password_reset`,
  sendCode: `/api/Onboarding/verifyPhone_sendOtp`,
  verifyCode: `/api/Onboarding/verifyPhone_validateOtp`,
  resendCode: `/api/Onboarding/resend_otp`,
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

export const loginWithEmail = async loginDetails => {
  try {
    await API.post(routes.accountLoginEmail, loginDetails);
    
  } catch (error) {
    let message = error.data.message;
    // let message = getErrorMsg(error);
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
    let message = error.response.data.errors.Bvn[0] ? error.response.data.errors.Bvn[0] : getErrorMsg(error);
        console.log(error.response);

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

export const resetLink = async reset => {
  try {
    await API.get(routes.passwordResetLink, { params: { reset } });
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const resetPassword = async reset => {
  try {
    await API.get(routes.passwordReset, { params: { reset } });
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const sendOtp = async number => {
  try {
    await API.get(routes.sendCode, number);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const validateOtp = async number => {
  try {
    await API.get(routes.verifyCode, number);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};

export const resendOtp = async number => {
  try {
    await API.get(routes.resendCode, number);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};


