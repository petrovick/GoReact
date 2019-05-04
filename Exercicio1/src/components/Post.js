import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import "../style.scss";

const Post = props => (
  <Fragment>
    <PostHeader />
    <div className="post-header-container">
      <img className="avatar" src={props.dados.avatar} />
      <img src={props.dados.avatar} />
      <label>{props.dados.nome}</label>
      <label>{props.dados.tempoPost}</label>
    </div>
  </Fragment>
);

Post.defaultProps = {
  children: "Salvar"
};

Post.propTypes = {
  dados: PropTypes.shape({
    id: PropTypes.string,
    nome: PropTypes.string,
    avatar: PropTypes.string,
    tempoPost: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Post;
