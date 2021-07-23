import API from './axios';

const routes = {
  accountLoginPhone: `/api/Onboarding/login`,
};

const DEFAULT_ERROR_MESSAGE = "An error occurred, please try again";


const getErrorMsg = (error) => {
    if (error) {
      if (error.response?.data) {
        const data = error.response.data;
        let errors = data.errors.map((error) => error.message);
        return errors.length > 0 ? errors[0] : DEFAULT_ERROR_MESSAGE;
      }
      return DEFAULT_ERROR_MESSAGE;
    }
  
    return DEFAULT_ERROR_MESSAGE;
  };


export const loginWithPhone = async (loginDetails)  => {
  try {
    const response = await API.post(routes.accountLoginPhone, loginDetails);
    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
}
