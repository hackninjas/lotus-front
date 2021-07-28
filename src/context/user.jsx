import React, { createContext, useState, useMemo } from 'react';
import axios from 'axios';

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

const register = async user => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };
  const res = await axios.post(
    'https://lotus-onboarding-service.azurewebsites.net/api/Onboarding/register_user',
    user
  );
  await console.log(res.data);
  // const data = await res.data;
};

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialValues);

  const contextValue = useMemo(
    () => ({
      userData,
      setUserData,
      register,
    }),
    [userData]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export { UserContext, UserProvider };
