import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Team from './pages/Team'
import AuthPage from './pages/AuthPage'



const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </div>
  )
}

export default App