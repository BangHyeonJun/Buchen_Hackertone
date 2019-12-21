import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./index.scss";

function Index({ tab, setTab }) {
    const handleTabClick = id => {
        setTab(
            tab.map((item, idx) => {
                if (item.id === id) {
                    return {
                        ...item,
                        def: true
                    };
                } else {
                    return {
                        ...item,
                        def: false
                    };
                }
            })
        );
    };

    return (
        <ul>
            <ul className="tab-container">
                {tab.map((item, idx) => {
                    return (
                        <Item
                            key={idx}
                            tab={item}
                            idx={idx}
                            maxCount={tab.length}
                            handleTabClick={handleTabClick}
                        />
                    );
                })}
            </ul>
        </ul>
    );
}

export default Index;
