import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';
import logo from "./images/logo.jpg"

const NavBar = () => {
    return (
        <div className="container">
        <ul className="nav d-flex align-items-center">
            <li className="nav">
                <NavLink className="nav__link active" aria-current="page" href="#"><img src={logo} width= "75" alt="logo" className="img-fluid rounded"/></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav__link" to='/categoria/verano' href="#">Linea Verano</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav__link " to='/categoria/invierno' href="#">Linea invierno</NavLink>
            </li>
            <li>
               <NavLink className="nav__link " to='/Cart'>
            <CartWidget/>
               </NavLink>
            </li>
        </ul>
        
        </div>
    )
}

export default NavBar;