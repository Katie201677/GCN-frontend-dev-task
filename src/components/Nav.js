import React from 'react';
import "./Nav.css";

function Nav() {
  const menuArray = ["Home", "Videos", "Presenters"];

  const navLayout = menuArray.map((item) => {
    return (
      <li className="nav--list--item">{item}</li>
    )
  })

  return(
    <nav className="nav">
      <ul className="nav--list">
        {navLayout}
      </ul>
    </nav>
  )
}

export default Nav;