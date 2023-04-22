import React from "react";
import {
  LogoContainer,
} from "./Narbar.elements";
import { GiBookCover } from "react-icons/gi";
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CardWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
          <LogoContainer>
            <GiBookCover/>
            <p>Hound Libros</p>
          </LogoContainer>

            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to='/'>Libros</Link>
            <Link className='link' to='/'>Otros</Link>
            <Link className='link' to='/cart'><CartWidget/></Link>
        </div>
    )
}
