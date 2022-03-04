import React, {useState} from 'react';
import styled from 'styled-components'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { IoMenu } from "react-icons/io5";
import { motion } from 'framer-motion';
import { Outlet, Link } from 'react-router-dom';
import AboutMe from './AboutMe';

const CustomNav = styled(motion.div)`
    background-color:#1E1E1E;
    color:white;
    display:flex;
    flex-direction: row;
    align-items:center;
    height:60px;
`
const NavLinks = styled(motion.NavLink)`
    color:white;
  
    @media all and (max-width: 800px){
        display:none;
    }

    &:hover{
        border-bottom: 1px solid white;
    }
`


const NavLogo = styled(motion.NavbarText)`
    color:white;
    position:fixed;
    font-family: 'Inspiration', cursive;
    font-size:2rem;
`

const NavDropDown = styled(motion.Button)`
    border:none;
    background-color:transparent;
    color:white;
    font-size:2rem;
    display:none;
    z-index:1000;
    @media all and (max-width: 800px){
        display:block;
    }

`
const SideBar = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
  width:60%;
  background-color: #1E1E1E;
  color:white;
  position:fixed;
  top:0;
  right:0;
  z-index:999;

  a{
      padding-bottom: 80px;
      color:white;
      text-decoration:none;
  }
`

const MyNav = () =>{

    const [isOpen, setIsOpen]=useState(false);

    const dropDown={
        hidden:{opacity:0, y:-100},
        visible:{opacity: 1, y:0}
    }

    const fadeLeft={
        hidden:{ opacity: 0, x:-250},
        visible:{ opacity: 1, x: 0 }
    }

    const fadeRight={
        hidden:{opacity: 0, x:100},
        visible:{opacity: 1, x:0 }
    }

    return(
        <div>
        <CustomNav
         initial='hidden'
         animate='visible'
         transition={{ duration: 0.5 }}
         variants={dropDown}
        >
            
            <NavLogo className='ms-5'
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.5 }}
             variants={fadeLeft}
            >
                Andrew Furlong
            </NavLogo>

            <Nav className="ms-auto">
            <NavLinks className="me-4"
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.75 }}
             variants={dropDown}
            >
            </NavLinks >
            <NavLinks className="me-4"
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.5 }}
             variants={dropDown}
            >
                Projects
            </NavLinks>
            <NavLinks className='me-4'
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.25 }}
             variants={dropDown}
            >
                Resume
            </NavLinks>
            <NavLinks className='me-4'
             initial='hidden'
             animate='visible'
             transition={{ duration: 1 }}
             variants={dropDown}
            >
                Contact
            </NavLinks>
            <NavLinks className='me-5'
             initial='hidden'
             animate='visible'
             transition={{ duration: 0.75 }}
             variants={dropDown}
            >
                Home
            </NavLinks>
            </Nav>
            <NavDropDown 
             onClick={()=>{setIsOpen(!isOpen)}}
             className='pb-2 me-5 ps-5 nav-toggle' 
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.5 }}
             variants={fadeRight}
            ><IoMenu /></NavDropDown>
            {isOpen && <SideBar><a href='#'>Home</a><a href='#'>Contact</a><a href='#'>Resume</a><a href='#'>Projects</a><a href='#'>About Me</a></SideBar>}
        </CustomNav>
        </div>
    );
}

export default MyNav;