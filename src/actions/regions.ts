import { ActionType, createAsyncAction } from "typesafe-actions";
import { RegionInfo } from "../types/regions";

export const regionsActions = createAsyncAction(
    "REGIONS_REQUEST",
    "REGIONS_SUCCESS",
    "REGIONS_FAILURE"
)<void, RegionInfo[], string>();

export type RegionsActionsType = ActionType<typeof regionsActions>;
