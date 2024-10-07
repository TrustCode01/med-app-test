import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css';

const Landing_Page = ()=>{
  return (
    <div>
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
              <a href="#services">
                <button className="button">Get Started</button>
              </a>
                
          </div>
  
        </div>
      </section>
    </div>
  )
}

export default Landing_Page