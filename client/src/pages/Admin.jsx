import { useNavigate } from "react-router"
import { useAuthStore } from "../store/auth.store"
import { useEffect } from "react"

function Admin() {
  const {user } = useAuthStore()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user) navigate("/")
  },[user])

  return (
    <div>
      Admin Page
    </div>
  )
}

export default Admin
