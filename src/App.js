import React, { useState, useEffect } from "react";
import Posts from "./conponents/Posts.jsx";
import Pagination from "./conponents/Pagination.jsx";
import "./App.css";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fecthPosts();
  }, []);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h1 className="text-primary">My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        paginate={paginate}
        postPerPage={postPerPage}
        currentPage={currentPage}
        totalPost={posts.length}
      />
    </div>
  );
};

export default App;
