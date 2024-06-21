import React from "react";

const Posts = ({ currentPosts, loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <ul className="list-group">
      {currentPosts.map(post => {
        return <li key={post.id} className="list-group">{post.title}</li>
      })}
    </ul>
  );
};

export default Posts;
