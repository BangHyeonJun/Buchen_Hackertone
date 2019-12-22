import React from "react";
import "./index.scss";
import verry_happy from "../../statics/img/verry_happy.svg";
import happy from "../../statics/img/happy.svg";
import normal from "../../statics/img/normal.svg";
import sad from "../../statics/img/sad.svg";
import verry_sad from "../../statics/img/verry_sad.svg";

function Index({ emoType }) {
    const icon = {
        "1": {
            icon: verry_happy,
            sub: "공기가 매우 좋아요 🕺 밖에 나가서 공기를 마시세요",
            name: "매우 좋음"
        },
        "2": {
            icon: happy,
            sub: "공기가 좋아요 🏃‍♂️🙆‍♂️ 나가서 운동하셔도 좋아요",
            name: "좋음"
        },
        "3": {
            icon: normal,
            sub: "공기가 나쁘지 않아요 🙍‍♂️ 그래도 마스크는 챙겨주세요",
            name: "보통"
        },
        "4": {
            icon: sad,
            sub: "공기가 나빠요 🤦‍♂️ 마스크를 챙겨주세요",
            name: "나쁨"
        },
        "5": {
            icon: verry_sad,
            sub: "공기가 매우 나빠요 🙅🏼‍♂️ 외출을 자제해 주세요",
            name: "매우 나쁨"
        }
    };

    return (
        <div className="emotion-wrap">
            <div className="emotion-container">
                <img className="icon" src={icon[emoType]["icon"]}></img>
            </div>
            <div className="emotion-title-container main">
                <span className="main-title">{icon[emoType]["name"]}</span>
            </div>
            <div className="emotion-title-container sub">
                <span className="sub-title">{icon[emoType]["sub"]}</span>
            </div>
        </div>
    );
}

export default Index;
