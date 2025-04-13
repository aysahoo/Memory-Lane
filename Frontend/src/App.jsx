import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Team from './pages/Team';
import AuthPage from './pages/AuthPage';
import Space from './components/Space';
import Chat from './pages/Chat';
import Loader from './pages/Loader';
import CustomCursor from './components/CustomCursor';
import FadeInWrapper from './components/FadeIn';
import About from './pages/About';
import TermsPolicies from './pages/TermsPolicies';
import ErrorPage from './pages/ErrorPage';
import ProfileSettings from './pages/ProfileSettings';
import { ReactLenis } from 'lenis/react';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(contentTimer);
    }, 2500);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1.5,
        gestureOrientation: 'vertical',
        syncTouch: true,
      }}
    >
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black">
          <Loader />
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        } cursor-none overflow-x-hidden`}
      >
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/auth" element={<FadeInWrapper><AuthPage /></FadeInWrapper>} />
          <Route path="/space" element={<Space />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsPolicies />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
