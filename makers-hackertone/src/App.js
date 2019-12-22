import React, { useState, useEffect } from "react";
import Components from "./components";
import "./App.scss";

function App() {
    const [Dust, setDust] = useState(0);
    const [Humi, setHumi] = useState(0);
    const [Temper, setTemper] = useState(0);
    const [tab, setTab] = useState([]);

    return (
        <div className="App-wrap">
            <div className="App">
                <Components
                // Dust={Dust}
                // setDust={setDust}
                // Humi={Humi}
                // setHumi={setHumi}
                // Temper={Temper}
                // setTemper={setTemper}
                // tab={tab}
                // setTab={setTab}
                ></Components>
            </div>
        </div>
    );
}

export default App;
