import React, { useState, useEffect } from "react";
import icon from "../../statics/img/humidity.svg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
import "./index.scss";

function Index({ val }) {
    const [humidity, setHumidity] = useState(0);

    // useEffect(() => {
    //     setHumidity(val);
    // }, []);

    return (
        <div className="humidity-box">
            <div className="icon-box">
                <img className="icon" src={icon}></img>
            </div>
            <div className="value-box">
                {/* <Odometer value={humidity} format="(dddd)" /> */}
                <span className="unit">%</span>
            </div>
        </div>
    );
}

export default Index;
