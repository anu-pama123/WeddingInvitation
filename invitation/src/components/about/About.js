import React from "react";

import "./about.css";
import bride from '../../static/image4.jpeg';
import groom from '../../static/image5.jpeg';

const About = () => {

    return (        
        <div className="bridegroom clear section-padding bg-pink">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-md-6">
                        <div className="item toright mb-30 animate-box fadeInLeft animated">
                            <div className="img">
                                <img src={bride} alt="bride-logo"></img>
                            </div>
                            <div className="info valign">
                                <div className="full-width">
                                    <h6>Keerthana</h6>
                                    <span>The Bride</span>
                                    <p>D/O Rajan k m, Valiyaparambath(House), Nadakkuthazha, Vadakara, Kozhikode, PIN-673104</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="item toright mb-30 animate-box fadeInLeft animated">
                            <div className="img">
                                <img src={groom} alt="groom-logo"></img>
                            </div>
                            <div className="info valign">
                                <div className="full-width">
                                    <h6>Dishith</h6>
                                    <span>The Groom</span>
                                    <p>S/O Raveendran T, Tharol(House), Chorode, Vadakara, Kozhikode, PIN-673106</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="date">
                        <div className="col-md-12 text-center animate-box fadeInUp animated">
                            <h3 className="oliven-couple-title">
                            Are getting married!
                            </h3>
                            <h4 className="oliven-couple-subtitle">
                            December 25, 2022 — Vadakara, Nadakkuthazha
                            </h4>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About