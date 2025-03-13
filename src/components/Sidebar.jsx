import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
        <h2>Categories</h2>
        <ul>
        <li><Link to="/category/tech">Tech</Link></li>
        <li><Link to="/category/lifestyle">Lifestyle</Link></li>
        <li><Link to="/category/business">Business</Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar