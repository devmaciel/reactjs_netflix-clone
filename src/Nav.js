import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

  const [show, handleShow] = useState(false);

  // listener when scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) 
        handleShow(true);
      else
        handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    }

  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
     
      <img 
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img 
        className="nav__avatar"
        src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3?format=png&name=360x360"
        alt="Netflix Logo"
      />

    </div>
  )
}

export default Nav
