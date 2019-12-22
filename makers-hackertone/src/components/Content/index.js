import React, { useState, useEffect } from "react";
import Dust from "../Dust";
import Humidity from "../Humidity";
import Temperature from "../Temperature";
import Emotion from "../Emotion";
import Update from "../Update";
import "./index.scss";

function Index({ Dust, Humi, Temper }) {
    console.log(Dust, Humi, Temper);
    // if (tab) {
    return (
        <div className="content-wrap">
            <div className="left-content-box">
                <Emotion emoType={"1"}></Emotion>
            </div>
            <div className="right-content-box">
                <div className="top-wrap">
                    <Dust val={Number(Dust)}></Dust>
                    <Update date={"2019-12-22"}></Update>
                </div>
                <div className="bottom-wrap">
                    <Temperature val={Number(Temper)}></Temperature>
                    <Humidity val={Number(Humi)}></Humidity>
                </div>
            </div>
        </div>
    );
    // } else {
    //     return <div></div>;
    // }
}

export default Index;
