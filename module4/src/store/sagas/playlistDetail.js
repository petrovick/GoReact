import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PlaylistDetailsActions } from "../ducks/playlists";

export function* getPlaylists(action) {
  try {
    const response = yield call(api.get, "/playlists");
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {}
}
