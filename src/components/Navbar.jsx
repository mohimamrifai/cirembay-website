import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import './navbar.css';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/')

  const [open, setOpen] = useState(false)
  return (
    <nav className='navbar'>
        <h1 className='logo'>Cirembay</h1>
        <div className={open ? 'links open' : 'links'}>
          <Link to="/" className={`link ${splitLocation[1] === "" ? "active" : ""}`}>Home</Link>
          <Link to="/menus" className={`link ${splitLocation[1] === "menus" ? "active" : ""}`}>Menus</Link>
          <Link to="/contact" className={`link ${splitLocation[1] === "contct" ? "active" : ""}`}>Contact</Link>
          <AiOutlineClose className="btn-close" onClick={() => {
          setOpen(!open);
        }}/>
        </div>
        <AiOutlineMenu className="btn-menu" onClick={() => {
          setOpen(!open);
        }}/>
        
    </nav>
  )
}

export default Navbar
