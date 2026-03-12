import { Link } from "react-router"
import LogOut from "../../components/LogOut"

function User() {

  return (
    <div>
      Agent page
<LogOut/>
      <Link to={"/sendcsv"}>Send CSV File</Link>
      <Link to={"/sendreport"}>Send Report</Link>
      <Link to={"/reports"}>Reports</Link>
    </div>
  )
}

export default User
