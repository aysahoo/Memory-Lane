// import React, { useState, useEffect, lazy } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Homepage from './pages/Homepage'
// import Team from './pages/Team'
// import AuthPage from './pages/AuthPage'
// import Space from './components/Space'
// import Chat from './pages/Chat'
// import Loader from './pages/Loader'



// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [fadeIn, setFadeIn] = useState(false);
  
//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       setIsLoading(false);
//       const fadeTimer = setTimeout(() => {
//         setFadeIn(true);
//       }, 200);
//       return () => clearTimeout(fadeTimer);
//     }, 4000);
//     return () => clearTimeout(loadingTimer);
//   }, []);
  
//   if (isLoading) {
//     return <Loader />;
//   }
  
//   return (
//     <div className={`overflow-x-hidden transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
//       <Routes>
//         <Route path='/' element={<Homepage />} />
//         <Route path='/team' element={<Team />} />
//         <Route path='/auth' element={<AuthPage />} />
//         <Route path='/space' element={<Space />} />
//         <Route path='/chat' element={<Chat />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './pages/Loader';

const Homepage = lazy(() => import('./pages/Homepage'));
const Team = lazy(() => import('./pages/Team'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const Space = lazy(() => import('./components/Space'));
const Chat = lazy(() => import('./pages/Chat'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      const fadeTimer = setTimeout(() => {
        setFadeIn(true);
      }, 200); // Time to fade in after loader finishes
      return () => clearTimeout(fadeTimer);
    }, 4000); // Loader delay time (4 seconds)
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show loader until isLoading is false
      ) : (
        <div
          className={`overflow-x-hidden transition-opacity duration-1000 ease-in-out ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/team' element={<Team />} />
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/space' element={<Space />} />
              <Route path='/chat' element={<Chat />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
