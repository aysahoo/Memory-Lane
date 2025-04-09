import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Team from './pages/Team'
import AuthPage from './pages/AuthPage'
import Space from './components/Space'
import Chat from './pages/Chat'
import Loader from './pages/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    // Simulate a loading delay of 4 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // Small delay before starting the fade-in (optional)
      const fadeTimer = setTimeout(() => {
        setFadeIn(true);
      }, 200); // Short delay between loading completion and fade-in
      
      return () => clearTimeout(fadeTimer);
    }, 4000);
    
    // Clean up the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);
  
  if (isLoading) {
    return <Loader />; // Show loader while loading
  }
  
  return (
    <div className={`overflow-x-hidden transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/space' element={<Space />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;