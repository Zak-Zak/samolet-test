import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";

import { getReducers } from "./reducers";
import { watchRegionsRequest } from "./sagas/regions";

export const configureStore = () => {
    const history = createBrowserHistory({ basename: "/" });
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        getReducers(history),
        compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );

    sagaMiddleware.run(watchRegionsRequest);

    return { store, history };
};
