import { Link, Outlet } from "react-router"
import LogOut from "../../components/LogOut"

function Admin() {

  return (
    <div>
  <LogOut/>
      <nav>
        <Link to={"/reports"}>WatchReports </Link>
        <Link to={"/admin/mennageagents"}> MennageAgents</Link>
        <Link to={"/sendreport"}> SendReport</Link>
        <Link to={"/sendcsv"}>Send CSV File</Link></nav>
      <Outlet />
    </div>
  )
}

export default Admin
