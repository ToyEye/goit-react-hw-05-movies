import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
  text-align: center;
  border-bottom: 2px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #393736;
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px 15px;
  margin-right: 15px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  border: 1px solid white;

  &.active {
    color: aqua;
    border: 1px solid aqua;
  }
`;
