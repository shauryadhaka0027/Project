import React, { createContext, useState } from 'react';
import axios from 'axios'



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
