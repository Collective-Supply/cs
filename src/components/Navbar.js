import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <div>
            <Link to="/">
                <span>Collective</span>.Supply
            </Link>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/shareLinks">Share Links</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}
