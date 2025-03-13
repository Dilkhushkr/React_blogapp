import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'
import './css/Appnew.css'
const App = () => {
  return (
    <div>
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='create'>Create Post</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            {/* <Sidebar/> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/post/:postId' element={<Post/>}/>
                <Route path='/create' element={<CreatePost/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App