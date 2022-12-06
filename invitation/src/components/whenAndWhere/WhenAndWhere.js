import React from "react";

import "./whenAndWhere.css";
import flowers from '../../static/image0.jpeg';

const WhenAndWHere = () => {

    return (        
        <div className="whenwhere section-padding bg-pink">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-30">
                        <span className="oliven-title-meta">Questions</span>
                        <h2 className="oliven-title">When & Where</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className="owl-item active">
                                    <div className="item">
                                        <div className="whenwhere-img">
                                            <img src={flowers} alt="marriage-flowers"></img>
                                        </div>
                                        <div className="content">
                                            <h5>Wedding Ceremony</h5>
                                            <p>Place - At Bride's Residense,Valiyaparambath,Nadakkuthazha</p>
                                            <p>Time - 12:00am – 13:00pm</p>
                                            <iframe 
                                            className="location" 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.0723192643068!2d75.57089271540272!3d11.618194391753715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x388e3e17ae3d39bb!2zMTHCsDM3JzA1LjUiTiA3NcKwMzQnMjMuMSJF!5e0!3m2!1sen!2sin!4v1670174594759!5m2!1sen!2sin" 
                                            loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhenAndWHere