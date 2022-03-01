import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
      
      </NavLink>

      <Bars></Bars>
      <NavMenu>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/projects" activeStyle>
          Projects
        </NavLink>

      </NavMenu>
      <NavBtn>
        <NavBtnLink to ='/cv'>CV</NavBtnLink>
      </NavBtn>
      </Nav>
  )
}

export default Navbar