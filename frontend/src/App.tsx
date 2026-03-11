
import './App.css'
import { Route, Routes, useNavigate } from 'react-router'
import Login from './pages/Login'
import Admin from './pages/admin/Admin'
import User from './pages/user/User'
import WatchReports from './pages/reportsPages/WatchReports'
import MennageAgents from './pages/admin/MennageAgents'
import SendReport from './pages/reportsPages/SendReport'
import SendCsv from './pages/reportsPages/SendCsv'
import PrivetComponent from './components/PrivetComponent'

function App() {
  const navigate = useNavigate()
  
  const logout = async () => {
    const res = await fetch("http://localhost:5000/api/auth/logout",{
      credentials:"include"
    })
    if (res.ok) { localStorage.setItem("user-storage", "")
      navigate("/login")
     }
    
  }
  return (
    <>
      <button onClick={logout}>Logout</button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivetComponent role='admin' ><Admin /></PrivetComponent >} />
        <Route path="/reports" element={<PrivetComponent  ><WatchReports /></PrivetComponent>} />
        <Route path="/admin/mennageagents" element={<PrivetComponent role='admin'><MennageAgents /></PrivetComponent>} />
        <Route path="/sendreport" element={<PrivetComponent ><SendReport /></PrivetComponent>} />
        <Route path="/sendcsv" element={<PrivetComponent ><SendCsv /></PrivetComponent>} />
        <Route path="/user" element={<PrivetComponent ><User /></PrivetComponent>} />
      </Routes>
    </>
  )
}

export default App
