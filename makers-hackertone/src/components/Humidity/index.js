import React from "react";
import icon from "../../statics/img/humidity.svg";
import "./index.scss";

function Index({ val }) {
    return (
        <div className="humidity-box">
            <div className="icon-box">
                <img className="icon" src={icon}></img>
            </div>
            <div className="value-box">
                <span className="value">{val}</span>
                <span className="unit">%</span>
            </div>
        </div>
    );
}

export default Index;
