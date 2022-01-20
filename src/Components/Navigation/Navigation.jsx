import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import s from './Navigation.module.css';

const Nav = styled.nav`
  text-align: center;
  border-bottom: 2px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const NavigationLink = styled(NavLink)`
  padding: 10px 15px;
  margin-right: 15px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  &.active {
    color: aqua;
    border: 1px solid aqua;
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </Nav>
  );
};
