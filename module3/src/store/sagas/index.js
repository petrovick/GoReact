import { all, takeLatest } from "redux-saga/effects";

import { Types as FavoriteTypes } from "../ducks/favorites";

// all lida com vários sagas, como se fosse o combine reducer
import { addFavorite } from "./favorites";
//* função generator do javascript, para lidar com async
export default function* rootSaga() {
    // takeLatest pega sem a ultima requisicao do usuário, se por acaso o usuário clicar 5 ou mais vezes no botão
    yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
