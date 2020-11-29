import { SagaIterator } from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";
import { regionsActions } from "../actions/regions";
import { getData } from "../utils/api";
import { RegionInfo } from "../types/regions";

export function* regionsRequestAsync(): SagaIterator {
    try {
        const regions: RegionInfo[] = yield call(getData);

        yield put(regionsActions.success(regions));
    } catch (e) {
        yield put(regionsActions.failure(e.message));
    }
}

export function* watchRegionsRequest() {
    yield takeEvery(regionsActions.request, regionsRequestAsync);
}
