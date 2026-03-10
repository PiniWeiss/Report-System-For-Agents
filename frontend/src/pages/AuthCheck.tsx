import { useNavigate } from "react-router"
import { useAuthStore } from "../store/auth.store"
import { useEffect } from "react"


function AuthCheck() {
    const navigate = useNavigate()
    const { user, isLoggedIn, isLoading } = useAuthStore()

    useEffect(() => {
        if(isLoading) return
        if (user && isLoggedIn) {
            switch (user.role) {
                case "admin":
                    navigate("/admin")
                    break
                case "agent":
                    navigate("/user")
                    break
                default:
                    navigate("/login")
            }
        }else {
            navigate("/login")
        }
    }, [user?.role, isLoggedIn, navigate])
    return (
        <div>
            Check For Changes...
        </div>
    )
}

export default AuthCheck
