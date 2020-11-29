import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regionsSelector } from "../selectors/regions";
import { STATUS } from "../types/status";
import { regionsActions } from "../actions/regions";

export const useLoadRegions = () => {
    const dispatch = useDispatch();
    const { requestStatus, regions, requestError } = useSelector(
        regionsSelector
    );

    useEffect(() => {
        if (requestStatus === STATUS.NONE || requestStatus === STATUS.FAILURE) {
            dispatch(regionsActions.request());
        }
    }, [dispatch, requestStatus]);

    return { regions, requestStatus, requestError };
};
