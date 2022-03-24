import { Link } from "react-router-dom"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function Navbar([designerName, urlParameter], navbarType) {
    
    const parameterProfile = "<li><Link to={`/?x=${urlParameter}`}>{`${designerName}'s Profile`}</Link></li>"
    const myProfile = '<li><Link to="/profile">My Profile</Link></li>'
    const shareLinks = '<li><Link to="/sharedlinks">Shared Links</Link></li>'
    const about = '<li><Link to="/about">About</Link></li>'
    const contact = '<li><Link to="/contact">Contact</Link></li>'

    const navbarArray = [parameterProfile, myProfile, shareLinks, about, contact]

    return (
        <nav>
            <div>
                <h2>
                    Collective.Supply
                </h2>
            </div>
            <ul>
                {navbarArray}
            </ul>
            <LoginButton />
            <LogoutButton />
        </nav>
    )
}
