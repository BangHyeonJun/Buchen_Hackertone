import React, { useState, useEffect } from "react";
import icon from "../../statics/img/temperature.svg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
import "./index.scss";

function Index({ val }) {
    const [temperature, setTemperature] = useState(0);

    // useEffect(() => {
    //     setTemperature(val);
    // }, []);

    return (
        <div className="temperature-container">
            <div className="icon-box">
                <img className="icon" src={icon}></img>
            </div>
            <div className="value-box">
                {/* <Odometer value={temperature} format="(dddd)" /> */}
                <span className="val">{temperature}</span>
                <span className="unit">℃</span>
            </div>
        </div>
    );
}

export default Index;
