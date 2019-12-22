import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

const tebURL = "http://45.119.146.82:8082/dust/getbyuser";
const userID = "dddfff22";

function Index(
    {
        // Dust,
        // Humi,
        // Temper,
        // setDust,
        // setHumi,
        // setTemper,
        // tab,
        // setTab
    }
) {
    const [now, setNow] = useState("-1");
    const [tab, setTab] = useState([]);
    const [delay, setDelay] = useState(0);
    let maxTab = 0;
    let temp = {};
    let count = 0;

    const getData = () => {
        axios({
            url: tebURL,
            method: "get",
            params: {
                user: userID
            }
        }).then(response => {
            const status = response["status"];

            if (status === 200) {
                const data = response["data"];
                // if (data["rooms"].length === tab.length) {
                //     data["rooms"].map((item, idx) => {
                //         tab.filter((oldOBJ, idx2) => {
                //             if (oldOBJ["id"] === item["roomId"]) {
                //                 if (
                //                     Number(item["temp"]) !==
                //                     Number(oldOBJ["temperature"])
                //                 ) {
                //                     setTemper(item["temp"]);
                //                 }
                //                 if (
                //                     Math.ceil(Number(item["dust"])) !==
                //                     Number(oldOBJ["dust"])
                //                 ) {
                //                     setDust(item["dust"]);
                //                 }
                //                 if (
                //                     Number(item["humidity"]) !==
                //                     Number(oldOBJ["humidity"])
                //                 ) {
                //                     setHumi(item["humidity"]);
                //                 }

                //                 // return {
                //                 //     id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
                //                 //     name: item["roomName"],
                //                 //     url: item["roomName"],
                //                 //     temperature: Number(item["temp"]), // 온도
                //                 //     dust: Math.ceil(Number(item["dust"])), // 먼지
                //                 //     humidity: Number(item["humidity"]), // 습도
                //                 //     def: idx === Number(now) ? true : false
                //                 // };
                //             }
                //         });
                //     });
                // } else {
                console.log("얼스 : ", data);
                maxTab = tab.length;
                setTab([]);
                data["rooms"].map((item, idx) => {
                    setTab(oldArray => [
                        ...oldArray,
                        {
                            id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
                            name: item["roomName"],
                            url: item["roomName"],
                            temperature: Number(item["temp"]), // 온도
                            dust: Math.ceil(Number(item["dust"])), // 먼지
                            humidity: Number(item["humidity"]), // 습도
                            // def: Number(idx) === Number(now) ? true : false
                            def: false
                        }
                    ]);
                });
                // }
            } else {
                console.error("오류가 발생하였습니다.", response["statusText"]);
            }

            return;

            // if (status === 200) {
            //     // return;

            //     data["rooms"].map((item, idx) => {
            //         if (idx === Number(now)) {
            //             setNow(idx);
            //         }

            //         if (tab.length > 0) {
            // tab.filter((oldOBJ, idx2) => {
            //     if (oldOBJ["id"] === item["roomId"]) {
            //         let temp = 3;
            //         return {
            //             ...oldOBJ,
            //             temperature: temp
            //             // id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //             // name: item["roomName"],
            //             // url: item["roomName"],
            //             // temperature: Number(item["temp"]), // 온도
            //             // dust: Math.ceil(Number(item["dust"])), // 먼지
            //             // humidity: Number(item["humidity"]), // 습도
            //             // def: idx === Number(now) ? true : false
            //         };
            //     }
            // });
            //         } else {
            //             // console.log("???");
            //             setTab(oldArray => [
            //                 ...oldArray,
            //                 {
            //                     id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //                     name: item["roomName"],
            //                     url: item["roomName"],
            //                     temperature: Number(item["temp"]), // 온도
            //                     dust: Math.ceil(Number(item["dust"])), // 먼지
            //                     humidity: Number(item["humidity"]), // 습도
            //                     def: idx === Number(now) ? true : false
            //                 }
            //             ]);
            //         }

            //         return;

            //         // console.log(tab.length);
            //         if (tab.length > 0) {
            //             if (idx === Number(now)) {
            //                 setNow(idx);
            //             }

            //             // console.log("들어오냐?");
            //             tab.filter((oldOBJ, idx2) => {
            //                 if (oldOBJ["id"] === item["roomId"]) {
            //                     // setTab(newArr);
            //                     return {
            //                         // id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //                         // name: item["roomName"],
            //                         // url: item["roomName"],
            //                         // temperature: Number(item["temp"]), // 온도
            //                         // dust: Math.ceil(Number(item["dust"])), // 먼지
            //                         // humidity: Number(item["humidity"]), // 습도
            //                         // def: idx === Number(now) ? true : false
            //                     };
            //                 } else {
            //                 }
            //                 //     if (oldOBJ["id"] === data["rooms"]["roomId"]) {
            //                 //         let newArr = [...tab];
            //                 //         newArr[idx2] = {
            //                 //             id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //                 //             name: item["roomName"],
            //                 //             url: item["roomName"],
            //                 //             temperature: Number(item["temp"]), // 온도
            //                 //             dust: Math.ceil(Number(item["dust"])), // 먼지
            //                 //             humidity: Number(item["humidity"]), // 습도
            //                 //             def: idx === Number(now) ? true : false
            //                 //         };
            //                 //         setTab(newArr);
            //                 //         // return {
            //                 //         //     id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //                 //         //     name: item["roomName"],
            //                 //         //     url: item["roomName"],
            //                 //         //     temperature: Number(item["temp"]), // 온도
            //                 //         //     dust: Math.ceil(Number(item["dust"])), // 먼지
            //                 //         //     humidity: Number(item["humidity"]), // 습도
            //                 //         //     def: idx === Number(now) ? true : false
            //                 //         // };
            //                 //     }
            //             });
            //         } else {
            //             temp[item["roomId"]] = {
            //                 id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //                 name: item["roomName"],
            //                 url: item["roomName"],
            //                 temperature: Number(item["temp"]), // 온도
            //                 dust: Math.ceil(Number(item["dust"])), // 먼지
            //                 humidity: Number(item["humidity"]), // 습도
            //                 def: idx === Number(now) ? true : false
            //             };
            //             setTab(oldArray => [
            //                 ...oldArray,
            //                 {
            //                     id: item["roomId"], // TODO : 이건 보내주는곳에서 설정해 주기
            //                     name: item["roomName"],
            //                     url: item["roomName"],
            //                     temperature: Number(item["temp"]), // 온도
            //                     dust: Math.ceil(Number(item["dust"])), // 먼지
            //                     humidity: Number(item["humidity"]), // 습도
            //                     def: idx === Number(now) ? true : false
            //                 }
            //             ]);
            //         }
            //     });
            // } else {
            //     console.error("오류가 발생하였습니다.", response["statusText"]);
            // }
        });
    };

    // useEffect(() => {
    //     getData();
    // }, [delay]);

    useEffect(() => {
        //     setInterval(() => {
        //         setDelay(count++);
        //     }, 1000);
        getData();

        // setInterval(
        //     t => {
        //         console.log(t.length);
        //         if (count > 2) {
        //             return;
        //         }
        //         getData();
        //         count++;
        //     },
        //     1000,
        //     tab
        // );
        // getData();
    }, []);

    return (
        <Router>
            <Header tab={tab} setTab={setTab} setNow={setNow} />
            {/* <Route
                // key={idx}
                key={0}
                path={`/Living Room}`}
                component={() => (
                    <Content
                        Dust={Dust}
                        Humi={Humi}
                        Temper={Temper}
                        // tab={tab[Number(now)]}
                        // oldTab={oldTab}
                        // setTab={setTab}
                        // setOldTab={setOldTab}
                    ></Content>
                )}
            /> */}

            {tab.map((item, idx) => {
                // console.log(item);
                return (
                    <Route
                        key={idx}
                        path={`/${item.url}`}
                        component={() => (
                            <Content
                                // Dust={Dust}
                                // Humi={Humi}
                                // Temper={Temper}
                                tab={tab[Number(now)]}
                                oldTab={oldTab}
                                setTab={setTab}
                                setOldTab={setOldTab}
                            ></Content>
                        )}
                    />
                );
            })}
        </Router>
    );
}

export default Index;
