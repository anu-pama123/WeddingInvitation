import React from "react";

import "./gallery.css";
import image1 from '../../static/image1.jpeg';
// import image2 from '../../static/image2.jpeg';
// import image3 from '../../static/image4.jpeg';
// import image4 from '../../static/image5.jpeg';

const Gallery = () => {

    return (        
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-30">
                        <span className="oliven-title-meta">Gallery</span>
                        <h2 className="oliven-title">Our Memories</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gallery-filter mt-3">
                    <div className="col-md-4 gallery-item ceremony">
                        <img src={image1} className="img-fluid mx-auto d-block"></img>
                    </div>
                    <div className="col-md-4 gallery-item ceremony">
                        <img src={image1} className="img-fluid mx-auto d-block"></img>
                    </div>
                    <div className="col-md-4 gallery-item ceremony">
                        <img src={image1} className="img-fluid mx-auto d-block"></img>
                    </div>
                    <div className="col-md-4 gallery-item ceremony">
                        <img src={image1} className="img-fluid mx-auto d-block"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery