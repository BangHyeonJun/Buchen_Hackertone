import React from "react";
import "./index.scss";
import verry_happy from "../../statics/img/verry_happy.svg";
import happy from "../../statics/img/happy.svg";
import normal from "../../statics/img/normal.svg";
import sad from "../../statics/img/sad.svg";
import verry_sad from "../../statics/img/verry_sad.svg";

function Index({ emoType }) {
    const icon = {
        "1": { icon: verry_happy, name: "매우 좋음", color: "#0054ff" },
        "2": { icon: happy, name: "좋음", color: "#1ddb16" },
        "3": { icon: normal, name: "보통", color: "#ff9f1a" },
        "4": { icon: sad, name: "나쁨", color: "#ff8224" },
        "5": { icon: verry_sad, name: "매우 나쁨", color: "#ff3838" }
    };

    return (
        <div className="emotion-wrap">
            <div className="emotion-container">
                <img className="icon" src={icon[emoType]["icon"]}></img>
            </div>
            <div
                className="emotion-title-container"
                // style={{ color: `rgba(${icon[emoType]["color"]}, 0.8)` }}
                style={{ color: `${icon[emoType]["color"]}` }}
            >
                <span>{icon[emoType]["name"]}</span>
            </div>
        </div>
    );
}

export default Index;
