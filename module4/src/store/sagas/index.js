import { all, takeLatest } from "redux-saga/effects";
import playlists, { Types as PlaylistsTypes } from "../ducks/playlists";
import playlistDetails, {
  Types as PlaylistDetailsTypes
} from "../ducks/playlistDetails";

import { getPlaylists } from "./playlists";
import { getPlaylistDetails } from "./playlistDetails";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)
  ]);
}
