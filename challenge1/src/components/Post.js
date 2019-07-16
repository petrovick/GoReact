import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

const Post = props => (
  <Fragment>
    <div className="post">
      <PostHeader avatar={props.data.avatar} name={props.data.name} time={props.data.time} />
      <hr />
      <p>{props.data.text}</p>
    </div>
  </Fragment>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    time: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Post;
