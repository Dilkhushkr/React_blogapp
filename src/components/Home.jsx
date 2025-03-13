import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Home.css'
const Home = () => {
    const[posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/posts').then((res)=>{
            setPosts(res.data)
        });

    },[]);
    console.log(posts)

  return (
    <div className="home-container">
        <h1>Recent Posts</h1>   
        {
            posts.map((post)=>(
                <div key={post.id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.content.substring(0,100)}... <Link to={`/post/${post.id}`}>Read More</Link></p>
                    <img src={post.image} alt={post.title} width='200' />
                </div>
            ))
        }

    </div>
  )
}

export default Home