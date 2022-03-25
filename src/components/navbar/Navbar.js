import { Link } from "react-router-dom"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { StyledNavbar, StyledNavItems, StyledLink } from '../../styled/Navbar';

export default function Navbar(version) {


  return (
    <nav>
        <StyledNavbar>
          <div>
              <h1>
                  Collective.Supply
              </h1>
          </div>
          <ul>
              <StyledNavItems>
                <li><StyledLink to="/myprofile">My Profile</StyledLink></li>
                <li><StyledLink to="/sharelinks">Share Links</StyledLink></li>
                <li><StyledLink to="/about">About CS</StyledLink></li>
                {/* <li><LoginButton /><LogoutButton /></li> */}
                <li><LogoutButton /></li>
              </StyledNavItems>
          </ul>
        </StyledNavbar>
    </nav>
  )
}
