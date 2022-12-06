import React, {useState, useEffect} from "react";

import "./countDown.css";

function getDistance(){
    var countDownDate = new Date("Dec 25, 2022 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    return distance
}

const CountDown = () => {
    var distance = getDistance()
    const [days, setDays] = useState(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const [hours, setHours] = useState(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [minutes, setMinutes] = useState(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const [seconds, setSeconds] = useState(Math.floor((distance % (1000 * 60)) / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            var distance = getDistance()
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        }, 1000);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])

    return (
        <div id="countdown" className="section-padding bg-img bg-fixed">
            <div className="container">
                <div className="row">
                    <div class="section-head col-md-12">
                        <h4>We will become a family in</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <li>
                                <span id="days">{days}</span>
                                days
                            </li>
                            <li>
                                <span id="hours">{hours}</span>
                                Hours
                            </li>
                            <li>
                                <span id="minutes">{minutes}</span>
                                Minutes
                            </li>
                            <li>
                                <span id="seconds">{seconds}</span>
                                Seconds
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
        </div>       
    )
}

export default CountDown