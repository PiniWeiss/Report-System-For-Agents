
import type { IReport } from "../types/IReport"
import { useEffect, useState } from "react"

export const useReports = () => {
  const [reports, setReports] = useState<IReport[]>([])
  const [error, setError] = useState<Error>()
  useEffect(() => {
    const getRports = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/reports`, {
          credentials: "include"
        }
        )
        const reportsData = await res.json()
        if (!res.ok) throw new Error("Fetch field..")
        setReports(reportsData)
      } catch (error) {
        if (error instanceof Error) setError(error)
      }
    }
    getRports()
  }, [])
  return {reports, error}

}
// function parseParams(params){
// return Object.entries(params).map(param => ` ${param[0]}=${param[1]}`).join('&') 
//  } 
