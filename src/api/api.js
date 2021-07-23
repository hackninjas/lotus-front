import API from './axios';

const routes = {
  accountLoginPhone: `/api/Onboarding/login`,
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

export const loginWithPhone = async loginDetails => {
  try {
    await API.post(routes.accountLoginPhone, loginDetails);
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};
