import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

const tebURL = "http://45.119.146.82:8082/dust/getbyuser";
const userID = "dddfff22";

export default function Index() {
    const [tab, setTab] = useState([]);
    useEffect(() => {
        axios({
            url: tebURL,
            method: "get",
            params: {
                user: userID
            }
        }).then(response => {
            const status = response["status"];
            const data = response["data"];

            if (status === 200) {
                data["rooms"].map((item, idx) => {
                    setTab(oldArray => [
                        ...oldArray,
                        {
                            id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
                            name: item["roomName"],
                            url: item["roomName"],
                            temperature: item["temp"], // 온도
                            dust: item["dust"], // 먼지
                            humidity: item["humidity"], // 습도
                            def: idx === 0 ? true : false
                        }
                    ]);
                });
            } else {
                console.error("오류가 발생하였습니다.", response["statusText"]);
            }
        });
    }, []);

    return (
        <Router>
            <Header tab={tab} setTab={setTab} />
            {tab.map((item, idx) => {
                console.log(item);
                return (
                    <Route
                        key={idx}
                        path={`/${item.url}`}
                        component={Content}
                    />
                );
            })}
        </Router>
    );
}
