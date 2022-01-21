import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
`;

const FilmList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;

const FilmItem = styled.li`
  height: 300px;
  margin-bottom: 15px;
  width: 350px;
  transform: scale(1);
  transition: transform 250ms linear;
  text-align: center;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  :hover,
  :focus {
    transform: scale(1.03);
  }
`;
const FilmText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FilmImages = styled.img`
  margin-right: auto;
  margin-left: auto;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  padding: 5px 20px;
  border-radius: 5px;
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 7px 20px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
`;

export {
  FilmList,
  FilmItem,
  FilmText,
  FilmImages,
  Form,
  FormInput,
  Button,
  MainTitle,
  LinkStyled,
};
