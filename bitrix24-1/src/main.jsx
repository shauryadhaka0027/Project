import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Context/AppContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
<AppContextProvider>
<ChakraProvider>
    <App/>
  </ChakraProvider>
</AppContextProvider>

 </BrowserRouter>
    
)
