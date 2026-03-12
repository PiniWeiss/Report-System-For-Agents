import { useNavigate } from "react-router"
import { useAuthStore } from "../store/auth.store"
import React, { useEffect, useState } from "react"

function Login() {
  const { user, isLoading, isLoggedIn, login } = useAuthStore()
  const [formData, setFormData] = useState({ agentCode: "", password: "" })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (isLoggedIn) {
      user?.role === "admin" ? navigate("admin") : navigate("user")
    }
  },[])
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userData = await login(formData.agentCode, formData.password)
    if (userData?.role === "admin") navigate("/admin")
    if (userData?.role === "agent") navigate("/user")
  }
  return (
    <div>
      <div className='login-area'>
        <form className='login-form' onSubmit={handleSubmit}>
          <label>Agentcode</label>
          <input onChange={handleChange} name="agentCode" className='agentcode-input' type="text" placeholder='Enter your agent code here:' />
          <label >Password</label>
          <input onChange={handleChange} name="password" className='password-input' type="text" placeholder='Enter your password here:' />
          <button >{isLoading ? "Connecting.." : "submit"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
