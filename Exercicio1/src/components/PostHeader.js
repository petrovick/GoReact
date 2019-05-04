import PropTypes from "prop-types";

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.dados.avatar} />
  </div>
);

PostHeader.PropTypes = {
  dados: {
    avatar: ""
  }
};

export default PostHeader;
