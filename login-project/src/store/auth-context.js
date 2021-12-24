import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (username, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('App Loaded');
    const isloggedInFlag = localStorage.getItem('isloggedIn');
    if (isloggedInFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email, password) => {
    localStorage.setItem('isloggedIn', '1');
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.setItem('isloggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
