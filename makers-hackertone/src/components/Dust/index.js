import React from "react";
import icon from "../../statics/img/sandstorm.svg";
import "./index.scss";

function Index({ val }) {
    return (
        <div className="dust-wrap">
            <div className="icon-box">
                <img className="icon" src={icon}></img>
            </div>
            <div className="dust-container">
                <div className="value-box">
                    <span className="val">{val}</span>
                </div>
                <div className="unit-box">
                    <span className="unit">㎍/m³</span>
                </div>
            </div>
        </div>
    );
}

export default Index;
