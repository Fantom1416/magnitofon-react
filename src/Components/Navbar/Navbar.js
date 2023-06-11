import React from 'react'
import "./Navbar.scss"
import Logo from "../../Images/logo.png"


function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    <input type="text" placeholder='Search...' />
                    <li><a href="#">Support</a></li>
                    <li><a href="#">My Bose</a></li>
                    <li><a href="#">Stores</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
