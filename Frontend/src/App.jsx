import { React,Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Team from './pages/Team'
import AuthPage from './pages/AuthPage'
import Space from './components/Space'
import Chat from './pages/Chat'
import Loader from './pages/Loader'



const App = () => {
  return (
    <div className='overflow-x-hidden'>
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
  )
}

export default App