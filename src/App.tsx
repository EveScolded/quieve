import React from 'react';
import { Box, Container } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Box display='flex' textAlign="center" justifyContent='center' mt={6}>
        <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/question' element={<WelcomePage />} />
        </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
