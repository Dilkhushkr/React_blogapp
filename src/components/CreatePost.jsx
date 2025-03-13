import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../css/Createpost.css'
const CreatePost = () => {
  const[formData,setFormData] = useState({title:"",content : "",image:''});
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/posts",formData).then(()=>{
        alert("Post created")
        navigate('/')
    });
  };
  return (
    <div className="create-post-container">
            <h1>Create a new Post</h1>
            <form onSubmit={handleSubmit} className="create-post-form">
                <input type="text" name='title' placeholder='Enter the title' onChange={handleChange} required className="input-field"/>
                <textarea name="content" placeholder='Enter the content' onChange={handleChange} required className="textarea-field"></textarea>
                <input type="text"  name='image' placeholder='Image url' onChange={handleChange} required className="input-field"/>
                <button className="submit-button">Create Post</button>
            </form>
    </div>
  )
}

export default CreatePost