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


