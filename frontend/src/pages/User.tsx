import { useNavigate } from "react-router"
import { useAuthStore } from "../store/auth.store.ts"
import { useEffect } from "react"

function User() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) navigate("/")
  }, [user])
  return (
    <div>
      Agent page
    </div>
  )
}

export default User
