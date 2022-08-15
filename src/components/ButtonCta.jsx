import React from 'react'
import './buttonCta.css'
import { Link } from 'react-router-dom'

const ButtonCta = () => {
  return (
    <div>
      <Link to="/menus" className='btn-cta'>Order Now</Link>
    </div>
  )
}

export default ButtonCta
