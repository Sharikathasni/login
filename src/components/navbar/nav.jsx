import React from 'react'
import './nav.css'
import { BsPerson, BsSearch, BsHeart, BsCart } from "react-icons/bs";
import Logo from "../../assets/Images/images/logo.png"

const Navbar = () => {
    return (
        <div className='nav'>
            <img src={Logo} className='logo-img' />
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='icon-container'>
                <BsPerson size={30} />
                <BsSearch size={30} />
                <BsHeart size={30} />
                <BsCart size={30} />
            </div>
        </div>
    )
}

export default Navbar

