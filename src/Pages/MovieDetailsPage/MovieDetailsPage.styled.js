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
  margin-right: 15px;
  margin-left: 15px;
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

export {
  Section,
  OneFilmImg,
  FilmName,
  OneFilmInfoContainer,
  Paragraph,
  AboutTitle,
  GenresTitle,
  GenresList,
  GenresItem,
};
