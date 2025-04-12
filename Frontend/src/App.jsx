import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Team from './pages/Team'
import AuthPage from './pages/AuthPage'
import Space from './components/Space'
import Chat from './pages/Chat'
import Loader from './pages/Loader'
import CustomCursor from './components/CustomCursor'
import FadeInWrapper from './components/FadeIn'
import About from './pages/About'
import TermsPolicies from './pages/TermsPolicies'
import ErrorPage from './pages/ErrorPage' // ⬅️ Import the 404 Page

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      const fadeTimer = setTimeout(() => {
        setFadeIn(true);
      }, 200);
      return () => clearTimeout(fadeTimer);
    }, 4000);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`cursor-none overflow-x-hidden transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <CustomCursor />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/auth' element={<FadeInWrapper><AuthPage /></FadeInWrapper>} />
        <Route path='/space' element={<Space />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<TermsPolicies />} />

        {/* 404 Page — always keep at the bottom */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
