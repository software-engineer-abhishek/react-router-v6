import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Navlinks are used in place of link as in Link classnames are avoided

const Navbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <div style={{marginRight:20}}>
    <Link to='/login'> Login </Link>
    </div>
    <div style={{marginRight:20}}>
    <Link to='/'> Home </Link>
    </div>
    <div style={{marginRight:20}}>
    <Link to='/about'> About </Link>
    </div>
    <div style={{marginRight:20}}>
    <Link to='/contact'> Contact </Link>
    </div>
    <div style={{marginRight:20}}>
    <Link to='/user/abhi'> Abhi </Link>
    </div>
    <div style={{marginRight:20}}>
    <Link to='/user/rexy'> Rexy </Link>
    </div>
    <div style={{marginRight:20}}>
    <Link to='/filter'> Filter </Link>
    </div>
    </div>
  )
}

export default Navbar