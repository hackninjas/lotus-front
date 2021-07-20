import React, { createContext, useState, useMemo } from 'react';

const initialValues = {
  name: null,
  balance: 0.00,
  accountNumber: '3115588991',
};

const UserContext = createContext(initialValues);

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialValues);

  const contextValue = useMemo(
    () => ({
      userData,
    }),
    [userData]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};


export { UserContext, UserProvider };
