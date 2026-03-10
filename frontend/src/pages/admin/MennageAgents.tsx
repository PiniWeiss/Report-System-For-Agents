import { useNavigate } from "react-router"
import { useAuthStore } from "../../store/auth.store"
import { useEffect } from "react"

function MennageAgents() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) navigate("/login")
    if (user?.role === "agent") navigate("/user")
  }, [user])
  return (
    <div>
      MennageAgents
    </div>
  )
}

export default MennageAgents
