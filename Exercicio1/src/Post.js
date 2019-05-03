import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Post = props => (
  <div className="main-wrapper">
    <div className="content">
      <div className="provider">
        <img src={props.dados.avatar} />
        <label>{props.dados.nome}</label>
        <label>{props.dados.tempoPost}</label>
      </div>
    </div>
  </div>
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
