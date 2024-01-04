import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='Links'>
        <Link to='/'>shop</Link>
        <Link to='/cart'>
            <MdOutlineShoppingCart size={32}/>
        </Link>
        </div>
    </div>
  )
}
