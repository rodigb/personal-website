import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background:#48283D;
height:60px;
display:flex;
justify-content:flex-start;
z-index:10;`

export const NavLink = styled(Link)`
color:#F1956E;
display:flex;
align-items:center;
padding:0 1rem;
height:100%
cursor:pointer;
text-decoration:none;

&.active {
    color:#F9D46E;

}
`
export const Bars = styled(FaBars)`
display:none;
color:#fff;

@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
}
`

export const NavMenu = styled.div`
display:flex;
align-items:center;
width:100vw;
white-space:nowrap;

@media screen and (max-width:760px){
    display:none;
}
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right:10px;

@media screen and (max-width: 768px){
    display:none
}

`

export const NavBtnLink = styled(Link)`
border-radius:4px;
background:#85496F;
padding:10px 22px;
color:#F1956E;
border:none;
outline:none;
cursor:pointer;
transtition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#F1956E;
    color:#F9D46E;
}
`