import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className=' flex justify-between px-10  bg-gray-950 text-white'>
        <div className="logo pt-5 ps-5">
            <strong>Shop Sphere</strong>
        </div>
        <nav >
            <ul className='flex'>
                <li className='ms-5'><Link to="/" href="" className='block p-5 hover:bg-gray-100 hover:text-black'>Home</Link></li>
                <li className='ms-5'><Link to="/shop" href="" className='block p-5 hover:bg-gray-100 hover:text-black'>Shop</Link></li>
                <li className='ms-5'><Link to="/contact" href="" className='block p-5 hover:bg-gray-100 hover:text-black'>Contact</Link></li>
                <li className='ms-5'><Link to="/about" href="" className='block p-5 hover:bg-gray-100 hover:text-black'>About</Link></li>
                <li className='ms-5'><Link to="/cart" href="" className='block p-5 hover:bg-gray-100 hover:text-black'>Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
