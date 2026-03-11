import { useState } from "react"
import type { CriteriaType } from "../types/CriteriaType"


export const useFilterReport = () => {
     const [ filters, setFilters ] = useState<CriteriaType>({
        catgory:null,
        urgency:null,
        agentCode:null
     })
     const [ reports, setReports ] = useState()

     const updatedFilters = (key: keyof CriteriaType, value: string) => {
        setFilters(prev => ({...prev, [key]: value}))
     }

     const fetchReports = async()=> {
        const res = await fetch("http://localhost:5000/api/reports"+ new URLSearchParams(filters))
     }
     
}