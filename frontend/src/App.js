import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './components/signin/SignIn';
import SignUpSide from './components/signUp/SignUp';
import Camera from './components/camera/Camera';
import { Hospital } from './components/hospital/Hospital';
import { HospitalEmailProvider } from './hospitalEmailContext';
import { Error } from './components/error/Error';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLog = localStorage.getItem('hospitalEmail');
    if (storedLog && storedLog !== '') {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
    <HospitalEmailProvider>
      {isLoggedIn ? (
        <Routes>
        <Route path='/' element={<SignUpSide/>}/>
        <Route path='/signin' element={<SignInSide setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/photo-capture' element={<Camera/>}/>
        <Route path='/hospital' element={<Hospital setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='*' element={<Error/>}></Route>
        </Routes>
      ) : (
        <Routes>
      <Route path='/' element={<SignUpSide/>}/>
      <Route path='/signin' element={<SignInSide setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='*' element={<Error/>}></Route>
      </Routes>
      )}
      
      </HospitalEmailProvider>
    </BrowserRouter>
  );
}

export default App;
