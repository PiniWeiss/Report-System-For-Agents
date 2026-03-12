import React from 'react'
import { useNavigate } from 'react-router'

function LogOut() {
    const navigate = useNavigate()
  
  const logout = async () => {
    const res = await fetch("http://localhost:5000/api/auth/logout",{
      credentials:"include"
    })
    if (res.ok) { localStorage.setItem("user-storage", "")
      navigate("/login")
     }
    
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LogOut
