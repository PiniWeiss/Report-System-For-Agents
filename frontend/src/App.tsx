
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Admin from './pages/admin/Admin'
import User from './pages/user/User'
import AuthCheck from './pages/AuthCheck'
import WatchReports from './pages/reportsPages/WatchReports'
import MennageAgents from './pages/admin/MennageAgents'
import SendReport from './pages/reportsPages/SendReport'
import SendCsv from './pages/reportsPages/SendCsv'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthCheck />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/reports" element={<WatchReports />} />
        <Route path="/admin/mennageagents" element={<MennageAgents />} />
        <Route path="/sendreport" element={<SendReport />} />
        <Route path="/sendcsv" element={<SendCsv />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}

export default App
