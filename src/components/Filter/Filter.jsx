import { Form, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form>
      <Label>
        <TextField
          onChange={onChangeFilter}
          id="filled-basic"
          label="Search contacts by name"
          variant="filled"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          first
          style={{ width: '300px' }}
          InputLabelProps={{
            style: {
              fontFamily: 'system-ui, sans-serif',
            },
          }}
        />
        <SearchOutlinedIcon
          style={{
            width: '30px',
            height: '30px',
            marginLeft: '-30px',
            marginTop: '15px',
          }}
        />
      </Label>
    </Form>
  );
};
