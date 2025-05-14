import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
    const navigate=useNavigate()
    

    return (
      <div className="" style={{backgroundColor:"red"}}>

        <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
        <button onClick={()=>navigate("/sintu")}>Component</button>

      </div>
    )
}
