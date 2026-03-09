
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Admin from './pages/Admin'
import User from './pages/User'

function App() {
  return (
    <>
       <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/user" element={<User/>}/>
          </Routes>
    </>
  )
}

export default App
