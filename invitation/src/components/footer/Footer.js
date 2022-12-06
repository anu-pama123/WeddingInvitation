import React from "react";

import "./footer.css";
import logo from '../../static/logo.png';

const Footer = () => {

    return (        
        <div className="footer">
            <div className="oliven-narrow-content">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>
                            <a>
                                <img src={logo} alt="logo-img"></img>
                                <span>
                                    CyberWiz
                                </span>
                            </a>
                        </h2>
                        <p className="info">info.cyberwiz@gmail.com - 8943628965</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer