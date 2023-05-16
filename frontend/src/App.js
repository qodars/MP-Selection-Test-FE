import React, { Component } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Verificationpage from './pages/verification';
import Home from './pages/home';
import UserProfileEdit from './pages/profileedit';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/verify/:token" element={<Verificationpage/>}/>
        <Route path="/profile-edit" element={<UserProfileEdit/>}/>
      </Routes>
    </Router>
     </ChakraProvider>
 
    
  
   
  );
}

export default App;
