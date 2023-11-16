import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, userDetail, setUserDetail }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
