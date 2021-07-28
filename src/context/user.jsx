import axios from 'axios';
import React, { createContext, useState, useMemo } from 'react';

const getUser = localStorage.getItem('user');
const initialValues = {
  name: 'Chijindu Amadi',
  balance: 0.0,
  image: '',
  accountNumber: '3115588991',
  phone_number: '09018970430',
  email: getUser,
};

const UserContext = createContext(initialValues);

const { Provider } = UserContext;

const register = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_BASE_URL}​/api​/Onboarding​/register_user`,data)
  const resData = await res.data

  console.log(resData)
}

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialValues);

  const contextValue = useMemo(
    () => ({
      userData,
      setUserData,
      register
    }),
    [userData]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export { UserContext, UserProvider };
