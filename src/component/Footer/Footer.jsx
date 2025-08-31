import React from 'react'
import './Footer.css'
import Instgram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Instgram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>  
    </div>
  )
}

export default Footer
