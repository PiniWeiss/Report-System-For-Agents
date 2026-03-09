
import './App.css'
import { Route, Routes } from 'react-router'

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
