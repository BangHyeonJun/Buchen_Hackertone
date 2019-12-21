import React from "react";
import "./index.scss";

function Index({ date }) {
    return (
        <div className="update-wrap">
            <div className="update-title">
                <span>업데이트 날짜 :</span>
            </div>
            <div className="update-value">
                <span>{date}</span>
            </div>
        </div>
    );
}
export default Index;
