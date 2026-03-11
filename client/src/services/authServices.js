export const loginReqest = async (agentCode, password) => {

    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agentCode, password }),
        credentials: 'include'
    }
    )
    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.message || "Connection Error")
    }
    return data
}