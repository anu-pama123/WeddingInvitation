import React from "react";

import "./header.css";

const Header = () => {

    return (        
        <header className="header-position valign bg-img parallaxie">
            <div className="container">
                <div className="header-row">
                    <div className="caption">
                        <h1>Dishith & Keerthana</h1>
                        <h5>25 December, 2022 – Kerala</h5>
                    </div>
                </div>
                <div className="scroll-down">
                    <button type="button" className="hero-scroll | js-hero-scroll">
                        <div className="hero-scroll__arrows">
                            <div class="arrow">
                                <div class="line"></div>
                                <div class="point"></div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header