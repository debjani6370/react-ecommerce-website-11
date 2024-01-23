import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer  class="footer"  id='footer'>
    <div class="footer-content">
      <div class="footer-section">
        <h2>About Us</h2>
        <a href="#" class="footer-link">Mission</a>
        <a href="#" class="footer-link">Vision</a>
        <a href="#" class="footer-link">Team</a>
      </div>

      <div class="footer-section">
        <h2>Services</h2>
        <a href="#" class="footer-link">Web Design</a>
        <a href="#" class="footer-link">Graphic Design</a>
        <a href="#" class="footer-link">Digital Marketing</a>
      </div>

      <div class="footer-section">
        <h2>Contact Us</h2>
        <a href="#" class="footer-link">Email</a>
        <a href="#" class="footer-link">Phone</a>
        <a href="#" class="footer-link">Address</a>
      </div>

      <div class="footer-section footer-contact">
        <h2>Stay Connected</h2>
        <div class="contact-info">
          <p>Email: info@no.com</p>
          <p>Phone: +1 (91) 456-7890</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer