import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Sign_Up from '../Sign_Up/Sign_Up'
function Navbar() {
    const userName = sessionStorage.getItem("name");
  return (
    <div>
        <nav>
        {/*<!-- Navigation logo section -->*/}
        <div class="nav__logo">
          {/*<!-- Link to the home page -->*/}
          <Link to="/">
            StayHealthy 
            {/*<!-- Insert an SVG icon of a doctor with a stethoscope -->*/}
            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{fill:"#3685fb"}}>
                <title>Doctor With Stethoscope SVG icon</title>
                <g>
                    <g>
                       {/* <!-- Path for the stethoscope icon -->*/}
                        <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                        {/*<!-- Additional path for the icon -->*/}
                        <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                        {/*<!-- Another path for the icon -->*/}
                        <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...."></path>
                    </g>
                </g>
            </svg>
          </Link>
         {/* <!-- A span element for styling purposes -->*/}
          <span>.</span>
        </div>
        {/*<!-- Navigation icon section with an onClick event listener -->*/}
        <div className="nav__icon" >
         {/* <!-- Font Awesome icon for bars (hamburger menu) -->*/}
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        {/*<!-- Unordered list for navigation links with 'active' class -->*/}
        <ul className="nav__links active">
          {/*<!-- List item for the 'Home' link -->*/}
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          {/*<!-- List item for the 'Appointments' link -->*/}
          <li className="link">
            <Link to="Appointments">Appointments</Link>
          </li>
          {/*<!-- List item for the 'Sign Up' link with a button -->*/}
          <li className="link">
            <Link to="Sign_Up">
              <button class="btn1">Sign Up</button>
            </Link>
          </li>
          {/*<!-- List item for the 'Login' link with a button -->*/}
          <li className="link">
            <Link to="Login">
              <button className="btn1">{userName?"Login":"Logout"}</button>
            </Link>
          </li>
          <li className="InstantConsultation">
            <Link to="Login">
              <button className="btn1">Book A Doctor</button>
            </Link>
          </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar           