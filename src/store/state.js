export const initialValues = {
  token: JSON.parse(localStorage.getItem('token')) || null,
  isLoggedIn: false,
  userData: null,
};

export const reducer = (state, action) => {
  if (action.type === 'LOGIN') {
    localStorage.setItem('token', JSON.stringify(action.payload.data.accessToken));
    return {
      ...state,
      token: action.payload.data.accessToken,
      isLoggedIn: true,
      userData: action.payload.data.profile,
    };
  } else if (action.type === 'LOGOUT') {
    localStorage.clear();
    return {
      ...state,
      token: null,
      isLoggedIn: false,
      userData: null,
    };
  } else {
    return { ...state };
  }
};
