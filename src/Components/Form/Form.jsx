import { useState, useEffect } from 'react';
import { FormStyled, FormInput, Button } from '../Components/';

const Form = ({ handleFormSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search.trim() !== '') {
      handleFormSubmit(search);
    }

    setSearch('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormInput onChange={handleSearch} value={search} />
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

export default Form;
