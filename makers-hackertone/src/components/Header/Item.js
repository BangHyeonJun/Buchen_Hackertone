import React from "react";
import { Link } from "react-router-dom";
import "./item.scss";

function Item({
    tab: { id, name, url, temperature, dust, humidity, def },
    idx,
    maxCount,
    handleTabClick
}) {
    return (
        <li
            className={`tab-box ${!def && "disabled"}`}
            data-id={id}
            style={{
                width: `calc(100% / ${maxCount})`
            }}
            onClick={() => {
                handleTabClick(id);
            }}
        >
            <Link className="link-box" to={url}>
                {name}
            </Link>
        </li>
    );
}

export default Item;
