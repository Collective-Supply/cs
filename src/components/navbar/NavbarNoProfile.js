import { Link } from "react-router-dom"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { StyledNavbar, StyledNavItems, StyledLink } from '../../styled/Navbar';

export default function NavbarNoProfile() {
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
              <li><StyledLink to="/about">About CS</StyledLink></li>
              <li><LoginButton /><LogoutButton /></li>
              {/* <li><LogoutButton /></li> */}
            </StyledNavItems>
          </ul>
        </StyledNavbar>
    </nav>
  )
}
