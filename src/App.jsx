import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Route/Home'
import Contact from './Route/Contact'
import About from './Route/About'
import SignUp from './Route/SignUp'
import LogIn from './Pages/LogIn'
function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Sign' element={<SignUp />} />
        <Route path='/' element={<LogIn />} />
      </Routes>

    </div>
  )
}

export default App