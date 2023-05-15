import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
     </ChakraProvider>
 
    
  
   
  );
}

export default App;
