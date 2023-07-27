import { Form, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={onChangeFilter} />
      </Label>
    </Form>
  );
};
