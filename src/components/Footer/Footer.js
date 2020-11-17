import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col col1-style">
                        <h4 className="h4-style">H#340 (4th Floor), Road #24, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh <br /> Phone: 018XXXXXXXX <br /> E-mail: info@company.com</h4>
                    </div>
                    <div className="col col2-style">
                        <h5 style={{color: "white"}} className="mr-3">Company</h5>
                        <ul className="ml-5">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Submit Listing  </a></li>
                        </ul>
                    </div>
                    <div className="col col2-style">
                       <h5 style={{color: "white", marginRight: "65px"}}>Quick Links</h5>
                        <ul className="ml-3" style={{marginLeft: '25px'}}>
                            <li><a href="#">Quick</a></li>
                            <li><a href="#">Links</a></li>
                            <li><a href="#">Rentals</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Our blog</a></li>
                        </ul>
                    </div>
                    <div className="col col2-style">
                    <h5 style={{color: "white", marginRight: "192px"}}>About us</h5>
                    <h4 className="h4-style mt-3">We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;