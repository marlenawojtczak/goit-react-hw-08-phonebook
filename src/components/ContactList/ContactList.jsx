import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <Button
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};