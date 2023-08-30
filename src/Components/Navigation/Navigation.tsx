import { Outlet } from 'react-router-dom';

import { Container } from '../Container';

import { Nav, NavigationLink } from './Navigation.styled';
import { routes } from '../../routes';

export const Layout = () => {
  return (
    <>
      <Nav>
        <NavigationLink to={routes.home}>Home</NavigationLink>
        <NavigationLink to={routes.movies}>Movies</NavigationLink>
      </Nav>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};
