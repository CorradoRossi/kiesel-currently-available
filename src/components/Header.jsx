import React from 'react'
import ResponsiveMenu from './Menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignRight } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import logo from '../assets/images/logo-cg.png'
import { Link } from "react-router-dom";
import styled from "styled-components";

const FaToggle = styled(FontAwesomeIcon)`
  outline: none !important;
  font-size: 2.2rem;
  &:focus {
    border: none !important;
    outline: none !important;
  }
`
const List = styled.ul`
  box-shadow: rgba(103,110,144,.05) 0 16px 16px,rgba(103,110,144,.05) 0 8px 8px,rgba(103,110,144,.05) 0 4px 4px,rgba(103,110,144,.05) 0 2px 2px;
  position: absolute;
  right: 17px;
  padding: 15px 30px 15px 30px;
  background-color: #F8F9FA;
  border: none;
  border-radius: 8px;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease;
  list-style: none;
`
const ListItem = styled.li`
  padding: 5px 5px 5px 5px;
  font-weight: 700;
`
const Buttons = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

const menuComponent = () => {
  return (
    <ResponsiveMenu
      menuOpenButton={<FaToggle icon={faAlignRight} className="text-dark" />}
      menuCloseButton={<FaToggle icon={faTimes} className="text-dark" />}
      changeMenuOn="800px"
      menu={
        <List style={{zIndex: '500'}} className="menu-list d-md-none">
          <ListItem>
            <Link to="/">Guitars</Link>
          </ListItem>
          <ListItem>
            <Link to="/bass-guitars">Basses</Link>
          </ListItem>
          <ListItem>
            <a href="https://github.com/CorradoRossi/kiesel-currently-available">Github</a>
          </ListItem>
        </List>
      }
    />
  )
}

function Header() {
  return (
    <div className="d-flex justify-content-around header pt-5 pb-4 px-lg-2 mx-lg-5">

      <a href="https://www.kieselguitars.com/" className="pl-5 mr-auto">
        <img className="logo mt-2" src={logo} height="40" />
      </a>

      <p className="d-none d-md-block mx-auto pt-2"><span className="font-weight-bold">(Unofficial)</span></p>

      <Buttons className="d-flex">
        <div className="d-flex pb-4">
          <div className="get-started">
            <Link to="/">Guitars</Link>
          </div>
        </div>
        <div className="d-flex pb-4 px-4">
          <div className="get-started">
            <Link to="/bass-guitars">Basses</Link>
          </div>
        </div>
      </Buttons>

      <div className="d-block d-lg-none mr-5">
        {menuComponent()}
      </div>
    </div>
  )
}

export default Header