import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './LandingPage.css';

const Landing_Page = ()=>{
  return (
    <div>
        <Navbar />
        <section className="hero-section">
        <div>
          <div data-aos="fade-up" className="flex-hero">
              
              <h1>
                Your Health<br/>
                <span className="text-gradient">
                  
                  Our Responsibility
                </span>
              </h1>
                <div class="blob-cont">
                    <div className="blue blob"></div>
                </div>
                <div className="blob-cont">
                    <div className="blue1 blob"></div>
                </div>
              <h4>
                Get your comprehensive health care tips and check ups across all specialties in just a few clicks.
              </h4>
              <Link to="Sign_Up">
                <button className="button">Get Started</button>
              </Link>
                
          </div>
  
        </div>
      </section>
    </div>
  )
}

export default Landing_Page