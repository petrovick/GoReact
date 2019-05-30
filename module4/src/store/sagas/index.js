import { all, takeLatest } from "redux-saga/effects";
import playlists, { Types as PlaylistsTypes } from "../ducks/playlists";
import { getPlaylists } from "./playlists";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, 
    getPlaylists)]);
}
