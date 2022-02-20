import { Link } from "react-router-dom"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';



export default function Navbar() {
  return (
    <nav>
        <div>
            <h2>
                Collective.Supply
            </h2>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/shareLinks">Share Links</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <LoginButton />
        <LogoutButton />
    </nav>
  )
}
