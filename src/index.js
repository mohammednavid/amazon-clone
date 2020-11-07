import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reducer, { initialState } from "./reducer";
import { ServiceProvider } from "./ServiceProvider";

ReactDOM.render(
    <React.StrictMode>
        <ServiceProvider initialState={initialState} reducer={reducer}>
            <App />
        </ServiceProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
