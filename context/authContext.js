// authContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: '', houseId: '' });
  const [lastMovie, setLastMovie] = useState(0);

  const logIn = (email, houseId) => {
    setIsLoggedIn(true);
    setUserDetails({ email, houseId });

  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const whatMovie = (id) => {
    setLastMovie(id);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userDetails, lastMovie, logIn, logOut, whatMovie }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
