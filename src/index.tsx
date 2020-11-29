import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import ruRU from "antd/lib/locale-provider/ru_RU";

import { App } from "./components/app";
import { routes } from "./routes";
import { configureStore } from "./configureStore";

import "antd/dist/antd.css";

const { store, history } = configureStore();

ReactDOM.render(
    <ConfigProvider locale={ruRU}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App>{routes}</App>
            </ConnectedRouter>
        </Provider>
    </ConfigProvider>,
    document.getElementById("root")
);
