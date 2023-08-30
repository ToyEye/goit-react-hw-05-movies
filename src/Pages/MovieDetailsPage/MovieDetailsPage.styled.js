import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  margin-top: 15px;
`;

const OneFilmImg = styled.img`
  width: 400px;
`;

const FilmName = styled.h2`
  font-size: 26px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const OneFilmInfoContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 15px;
  background-color: #fff;
`;

const Paragraph = styled.div`
  margin-bottom: 15px;
`;

const AboutTitle = styled.h3`
  margin-bottom: 20px;
`;

const GenresTitle = styled.h4`
  margin-bottom: 20px;
`;

const GenresList = styled.ul`
  display: flex;
`;

const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  border: 1px solid white;
  padding: 10px 40px;
  color: white;
  font-weight: 500;
  border-radius: 5px;

  &.active {
    color: aqua;
    border-color: aqua;
  }
  &:nth-child(1) {
    margin-right: 15px;
  }
`;

export {
  Section,
  OneFilmImg,
  FilmName,
  OneFilmInfoContainer,
  Paragraph,
  AboutTitle,
  Links,
  GenresTitle,
  GenresList,
  GenresItem,
};
