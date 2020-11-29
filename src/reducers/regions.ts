import { createReducer } from "typesafe-actions";
import { regionsActions, RegionsActionsType } from "../actions/regions";
import { RegionInfo } from "../types/regions";
import { STATUS } from "../types/status";

export type RegionsState = {
    requestStatus: STATUS;
    requestError: string;
    regions: RegionInfo[];
};

export const initialState = {
    requestStatus: STATUS.NONE,
    requestError: "",
    regions: [],
};

export const regionsReducer = createReducer<RegionsState, RegionsActionsType>(
    initialState
)
    .handleAction(regionsActions.request, (state) => ({
        ...state,
        requestStatus: STATUS.PENDING,
    }))
    .handleAction(regionsActions.success, (state, { payload }) => ({
        ...state,
        requestStatus: STATUS.SUCCESS,
        regions: payload,
    }))
    .handleAction(regionsActions.failure, (state, { payload }) => ({
        ...state,
        requestStatus: STATUS.FAILURE,
        requestError: payload,
    }));
