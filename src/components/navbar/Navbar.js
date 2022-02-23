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
            <li><Link to="/myprofile">My Profile</Link></li>
            <li><Link to="/sharelinks">Share Links</Link></li>
            <li><Link to="/about">About CS</Link></li>
        </ul>
        <LoginButton />
        <LogoutButton />
    </nav>
  )
}
