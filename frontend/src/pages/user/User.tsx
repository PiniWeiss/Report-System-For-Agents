import { Link } from "react-router"

function User() {

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
