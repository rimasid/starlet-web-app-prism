import React from 'react';
import '../../styles/navbar.css'
const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <a href=''>Home</a>
            </div>
            <div className='nav-links'>
                < a href=''>Home</a>
                < a href=''>About Us</a>
                < a href=''>Contact Us</a>
            </div>
        </nav>
    )
}

export default Navbar;