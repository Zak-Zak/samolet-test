import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter, RouterState } from "connected-react-router";
import { RegionsState, regionsReducer } from "./regions";

export type ApplicationState = {
    router: RouterState;
    regions: RegionsState;
};

export const getReducers = (history: History) =>
    combineReducers<ApplicationState>({
        router: connectRouter(history),
        regions: regionsReducer,
    });
