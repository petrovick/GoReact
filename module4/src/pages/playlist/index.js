import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";

import { Container, Header, SongList } from "./styles";
import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

console.tron.log("teste");
class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest();
  };

  render() {
    return (
      <Container>
        <Header>
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
            alt="Playlist"
          />
          <div>
            <span>PLAYLIST</span>
            <h1>Rock Forever</h1>
            <p>13 Musicas</p>
            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="Duracao" />
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>03:26</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
