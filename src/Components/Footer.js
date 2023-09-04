import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="section about-us">
          <h3>About Us</h3>
          <p>
            At "Happy Shopping," we understand the joy of finding the perfect
            item that matches your style and needs. 
          </p>
        </div>
        <div className="section contact-us">
          <h3>Contact Us</h3>
          <p>Email: Happyshopping@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="section social-media">
          <h3>Social Media</h3>
          <div className="social-icons">
        
            <a href="#">
              <AiFillFacebook color="white" size={25} />
            </a>
            <a href="#">
              <AiOutlineTwitter color="white" size={25} />
            </a>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
