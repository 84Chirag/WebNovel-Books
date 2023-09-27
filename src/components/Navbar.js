import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import themeContext from '../context/themes/themeContext'  // Import the theme context.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  // Access the togglemode and modestate values from the themeContext.
  const { togglemode, modestate } = useContext(themeContext);
  return (
    // The navigation bar is created with Bootstrap classes and dynamic CSS classes based on modestate.
    //we're using template literals($) and string interpolation to dynamically set the CSS class of the navbar element and the data-bs-theme attribute based on the value of the modestate variable from the context.
    <nav className={`navbar sticky-top navbar-expand-lg bg-${modestate}`} data-bs-theme={`${modestate}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active': ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active': ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Disabled</Link>
            </li>
          </ul>
          {/* we're conditionally rendering a button with either a sun or moon icon based on the value of the modestate variable.*/}
          {/* The togglemode function is called when the button is clicked to toggle between light and dark modes.  */}
          <button className="btn btn-5 mx-2" onClick={togglemode}>{modestate === 'light' ? ( 
            // If the modestate is 'light', it renders a sun icon (indicating light mode), and if it's anything else, it renders a moon icon (indicating dark mode).
            <FontAwesomeIcon style={{color:"yellow"}} icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
          )
          }</button>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar