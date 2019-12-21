import React from "react";
import icon from "../../statics/img/temperature.svg";
import "./index.scss";

function Index({ val }) {
    return (
        <div className="temperature-container">
            <div className="icon-box">
                <img className="icon" src={icon}></img>
            </div>
            <div className="value-box">
                <span className="value">{val}</span>
                <span className="unit">℃</span>
            </div>
        </div>
    );
}

export default Index;
