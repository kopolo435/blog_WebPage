import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <img src="/img" alt="" />
      <h3>{post.title}</h3>
      <p>{post.publish_date}</p>
    </Link>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
