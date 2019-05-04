import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} />
    <div className="data-container" >
      <strong>{props.name}</strong>
      <span>{props.time }</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.number
};

export default PostHeader;
