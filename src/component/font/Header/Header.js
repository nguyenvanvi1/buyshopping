import React from 'react'
import {Link} from "react-router-dom"
import 'boxicons';
import "./Header.css"
function Header() {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                    Electronics
                </Link>
            </h1>
        </div>
        <div className='header-links'>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" className='cart'>
              <i class='bx bxs-cart-add'></i>
              </Link>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header