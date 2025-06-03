import React,{useContext} from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import userContext from '../../utils/userContext';
import {useSelector} from 'react-redux'


const Navbar = () => {
  const location = useLocation();
  const {loggedInuser} = useContext(userContext);

  const cartItem = useSelector((store)=>store.cart.items);

  return (
    <ul>
        <li><Link to="/" className={location.pathname === "/" ? 'active' : ''}><span><FiHome /></span>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? 'active' : ''}><span><BiDetail /></span>About</Link></li>
        <li><Link to="/" ><span><BiSolidOffer/></span>Offer</Link></li>
        <li><Link to="/" ><span><MdLogin /></span>Login</Link></li>
        <li><Link to="/cart" className={location.pathname === "/cart" ? 'active' : ''}><span><LuShoppingCart /></span>Cart ({cartItem.length})</Link></li>
        <li><Link to="/" >{loggedInuser}</Link></li>
    </ul>
  )
}

export default Navbar