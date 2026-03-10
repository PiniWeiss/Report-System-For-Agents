import { Link, useNavigate } from "react-router"
import { useAuthStore } from "../../store/auth.store.ts"
import { useEffect } from "react"

function User() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) navigate("/login")
  }, [user])
  return (
    <div>
      Agent page

      <Link to={"/sendcsv"}>Send CSV File</Link>
      <Link to={"/sendreport"}>Send Report</Link>
      <Link to={"/reports"}>Reports</Link>
    </div>
  )
}

export default User
