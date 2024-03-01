import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error = () => {
    const history=useNavigate()
  return (
    <div>
      404 Error Page Not found
      <button onClick={()=>history("/")}>Redirect to login page</button>
    </div>

  )
}

export default Error
