import { Link, Outlet, useNavigate } from "react-router"
import { useAuthStore } from "../../store/auth.store.ts"
import { useEffect } from "react"

function Admin() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) navigate("/login")
  }, [user])

  return (
    <div>
      <nav>
        <Link to={"/reports"}>WatchReports </Link>
        <Link to={"/admin/mennageagents"}> MennageAgents</Link>
        <Link to={"/sendreport"}> SendReport</Link></nav>
        <Link to={"/sendcsv"}>Send CSV File</Link>
      <Outlet />
    </div>
  )
}

export default Admin
