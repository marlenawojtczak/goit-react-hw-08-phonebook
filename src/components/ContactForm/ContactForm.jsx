import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Filter } from '../../components';
import { Form, Label } from './ContactForm.styled';
import { TextField, Button } from '@mui/material';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            first
            style={{ width: '300px' }}
            startIcon
            InputLabelProps={{
              style: {
                fontFamily: 'system-ui, sans-serif',
              },
            }}
          />
        </Label>
        <Label>
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            first
            style={{ width: '300px' }}
            InputLabelProps={{
              style: {
                fontFamily: 'system-ui, sans-serif',
              },
            }}
          />
        </Label>
        <Button
          variant="outlined"
          type="submit"
          endIcon={<AddIcCallOutlinedIcon />}
          style={{
            width: '300px',
            dispplay: 'block',
            margin: '0 auto',
            fontFamily: 'system-ui, sans-serif',
            fontWeight: '600',
          }}
        >
          Add contact
        </Button>
      </Form>
      <Filter />
    </>
  );
};
