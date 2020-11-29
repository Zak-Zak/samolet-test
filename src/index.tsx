import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import ruRU from "antd/lib/locale-provider/ru_RU";

import { App } from "./components/app";
import { routes } from "./routes";

import "antd/dist/antd.css";

ReactDOM.render(
    <ConfigProvider locale={ruRU}>
        <BrowserRouter>
            <App>{routes}</App>
        </BrowserRouter>
    </ConfigProvider>,
    document.getElementById("root")
);
