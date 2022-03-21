import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 5px;
`

export const StyledNavItems = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-auto-flow: column;
    font-size: 1rem;
    grid-gap: 30px;
    align-items: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`