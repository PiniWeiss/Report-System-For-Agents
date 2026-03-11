import { useReports } from "../../hooks/useReports"

function WatchReports() {
  const { reports, error } = useReports()

  if (error) return (
    <p>Somthing went wrong...</p>
  )

  return (
    <>
      <form >
        <select name="category" id="">
          <option value="intelligence"></option>
          <option value="logistics"></option>
          <option value="alert"></option>
        </select>
        <select name="urgency" id="">
          <option value="low"></option>
          <option value="medium"></option>
          <option value="high"></option>
        </select>
        <input type="text" />
      </form>
      <div>
        {reports?.map(report => (
          <div key={report._id.toString()}>{JSON.stringify(report, null, 4)}</div>
        ))}
      </div></>
  )
}

export default WatchReports
