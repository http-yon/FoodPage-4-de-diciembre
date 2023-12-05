import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Nav = () => {
  const history = useNavigate()

  return (
    <div className='nav'>
      <div>
        <h1 onClick={()=>{ history("/home")}}> Foods </h1>
      </div>
      <div className='navCont'>
        <NavLink className="NavLink" to="/Home">Home</NavLink>
        <NavLink className="NavLink" to="/About" >About</NavLink>
        <NavLink className="NavLink" to="/Menu">Menu</NavLink>
        <NavLink className="NavLink" to="/Service" >Service</NavLink>
        <NavLink className="NavLink" to="/Contact">Contact</NavLink>
      </div>
    </div>

  )
}

export default Nav