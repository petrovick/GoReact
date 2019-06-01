import { runSaga } from "redux-saga";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
    it("Should be able to fetch respotories", async () => {
        const dispatched = [];

        //simula o PUT
        apiMock.onGet("users/petrovick/repos").reply(200, ["Repo 1", "Repo 2"]);

        await runSaga(
            {
                dispatch: action => {
                    dispatched.push(action);
                }
            },
            getRepositories
        ).toPromise();

        expect(dispatched).toContainEqual(
            RepositoriesActions.getSuccess(["Repo 1", "Repo 2"])
        );
    });
});
