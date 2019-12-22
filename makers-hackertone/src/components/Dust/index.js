import React, { useState, useEffect } from "react";
import icon from "../../statics/img/sandstorm.svg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
import "./index.scss";

function Index({ val }) {
    const [dust, setDust] = useState(0);

    // useEffect(() => {
    //     setDust(val);
    // }, []);

    return (
        <div className="dust-wrap">
            <div className="icon-box">
                <img className="icon" src={icon}></img>
            </div>
            <div className="dust-container">
                <div className="value-box">
                    {/* <Odometer value={dust} format="(dddd)" /> */}
                    <span className="val">{dust}</span>
                </div>
                <div className="unit-box">
                    <span className="unit">㎍/m³</span>
                </div>
            </div>
        </div>
    );
}

export default Index;
