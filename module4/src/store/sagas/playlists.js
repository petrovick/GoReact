import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PlaylistActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");
    yield put(PlaylistActions.getPlaylistsSuccess(response.data));
  } catch (err) {}
}
