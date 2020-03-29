import React from 'react'
import logo from '../assets/images/logo-cg.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex justify-content-around header pt-5 pb-4 px-lg-2 mx-lg-5">
      <a href="https://www.kieselguitars.com/" className="pl-5 mr-auto">
        <img src={logo} height="40" />
      </a>
      <p className="mx-auto pt-2"><span className="font-weight-bold">(Unofficial)</span></p>
      <div className="d-flex">
        <div className={"d-flex pb-4"}>
          <div className={"d-block get-started"}>
            <Link to="/">Guitars</Link>
          </div>
        </div>
        <div className={"d-flex pb-4 px-4"}>
          <div className={"d-block get-started"}>
            <Link to="/bass-guitars">Basses</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header