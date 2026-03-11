import React from 'react'
import { useAuthStore } from '../store/auth.store'
import { Navigate } from 'react-router'

interface PrivetComponetntProps {
    role?: string,
    children: React.ReactNode
}

function PrivetComponent({role, children}:PrivetComponetntProps) {
    const { user, isLoggedIn, isLoading} = useAuthStore()

    if(isLoading){
        return <div>Loading...</div>
    }
    if(!isLoggedIn){
        return <Navigate to={"/login"}/>
    }
    if(role === "admin" && role !== user?.role){
        return <Navigate to={"/user"}></Navigate>
    }
    if(role === "agent" && role !== user?.role){
        return <Navigate to={"/admin"}></Navigate>
    }
    
    
    
  return (
    <>{children}</>
  )
}

export default PrivetComponent
