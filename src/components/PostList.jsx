import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))
      ) : (
        <p>No se han realizado posts</p>
      )}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publish_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostList;
