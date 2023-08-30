import { useState, FormEvent, ChangeEvent } from 'react';
import { FormStyled, FormInput, Button } from '../Components';

type Props = {
  handleFormSubmit: (args: string) => void;
};

const Form = ({ handleFormSubmit }: Props) => {
  const [search, setSearch] = useState('');

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.currentTarget.value);
  };

  const handleSubmit = (evt: FormEvent) => {
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
