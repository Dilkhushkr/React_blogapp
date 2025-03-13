import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/Post.css'
const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${postId}`).then((response) => {
      setPost(response.data);
    });
  }, [postId]);
  console.log(post)
  console.log(postId)

  if (!post) return <h2 className="loading-text">Loading...</h2>;

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <img src={post.image} alt={post.title} width="400"  className="post-image"/>
      <p className="post-content">{post.content}</p>
    </div>
  );
};

export default Post;
