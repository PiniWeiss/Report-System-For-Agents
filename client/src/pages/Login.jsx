import { useNavigate } from "react-router"
import { useAuthStore } from "../store/auth.store"
import { useState } from "react"

function Login() {
  const { user, isLoading, login, success } = useAuthStore()
  const [formData, setFormData] = useState({ agentCode: "", password: "" })
  const navigate = useNavigate()

  const handelChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handelSubmit = async (event) => {
    event.preventDefault()
    await login(formData.agentCode, formData.password)
    if (success) {
      user.role === "admin" ? navigate("/admin") : navigate("/user")

    }
  }
  return (
    <div>
      <div className='login-area'>
        <form className='login-form' onSubmit={handelSubmit}>
          <label>Agentcode</label>
          <input onChange={handelChange} name="agentCode" className='agentcode-input' type="text" placeholder='Enter your agent code here:' />
          <label >Password</label>
          <input onChange={handelChange} name="password" className='password-input' type="text" placeholder='Enter your password here:' />
          <button >{isLoading ? "Connecting.." : "submit"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
