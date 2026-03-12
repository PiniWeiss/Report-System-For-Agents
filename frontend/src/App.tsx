
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
  
  return (
    <>
      
      <Routes>
        <Route path="*" element={<Login />} />
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
