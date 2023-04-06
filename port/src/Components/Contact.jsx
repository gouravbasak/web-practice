import React from "react";
import "./Contact.css";
import Github from '../Img/github.png';
import LinkedIn from '../Img/linkedin.png';
import Facebook from '../Img/facebook.png';
import Instagram from '../Img/instagram.png';
export default function Contact() {
  return (
    <div className="body">
      <div className="header">
        <h1 className="h1">Contact Us</h1>
        <h3 className="h3">Any question? Just write me a message!</h3>
      </div>
      <div className="n">
        <div className="n-left">
          <h1 className="header2">Contact Information</h1>
          <h4 className="h4">Fill the form and i will be get back to you within 24 hours.</h4>
          <div>
          <label className="info">8637866948</label><br/>
          <label className="info">gouravbasak248@gmail.com</label><br/>
          <label className="info">noida sec 126, India</label>
          <a href="https://github.com/gouravbasak" target="blank"><img src={Github} alt="/" className="icons"/></a>
          <a href="https://www.linkedin.com/in/gourav-basak/" target="blank"><img src={LinkedIn} alt="/"className="icons" /></a>
          <a href="https://www.facebook.com/gourav.basak.5245" target="blank"><img src={Facebook} alt="/" className="icons"/></a>
          <a href="https://www.instagram.com/gourav_06_/" target="blank"><img src={Instagram} alt="/" className="icons" /></a>
          <span className="dot"></span>
          <span className="dot2"></span>
          </div>
        </div>
        <div className="n-right">
          <input type="text" placeholder="First Name" className="ip"/>
          <input type="text" placeholder="Last Name" className="ip"/>
          <input type="email" placeholder="Email Id" className="ip"/>
          <input type="phone" placeholder="Phone" className="ip"/><br />
          <label className="h5">Reason for contacting?</label><br/>
          <input type="checkbox" name="" id="" /><span className="ip2">Web</span>
          <input type="checkbox" name="" id="" /><span className="ip2">Android</span>
          <input type="checkbox" name="" id="" /><span className="ip2">Design</span>
          <input type="checkbox" name="" id="" /><span className="ip2">Hiring</span>
          <br/><br /><br />
          <input type="text-area" placeholder="Leave a message" className="ip3"/>
          <input type="button" className="btn" value="SEND" />
          </div>
      </div>
    </div>
  );
}
