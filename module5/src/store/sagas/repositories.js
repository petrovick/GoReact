import { call, put } from "redux-saga/effects";
import axios from "axios";
import { Creators as RepositoriesActions } from "../ducks/repositories";

export function* getRepositories() {
    try {
        const response = yield call(
            axios.get,
            "https://api.github.com/users/petrovick/repos"
        );
        yield put(RepositoriesActions.getSuccess(response.data));
    } catch (err) {
        yield put(RepositoriesActions.getFailure());
    }
}
