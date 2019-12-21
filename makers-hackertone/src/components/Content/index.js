import React from "react";
import Dust from "../Dust";
import Humidity from "../Humidity";
import Temperature from "../Temperature";
import Emotion from "../Emotion";
import Update from "../Update";
import "./index.scss";

function Index() {
    return (
        <div className="content-wrap">
            <div className="left-content-box">
                <Emotion emoType={"1"}></Emotion>
            </div>
            <div className="right-content-box">
                <div className="top-wrap">
                    <Dust val={10}></Dust>
                    <Update date={"2019-12-21"}></Update>
                </div>
                <div className="bottom-wrap">
                    <Temperature val={10}></Temperature>
                    <Humidity val={10}></Humidity>
                </div>
            </div>
        </div>
    );
}

export default Index;
