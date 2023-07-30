import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Box
      style={{
        width: 300,
        height: 300,
        margin: '0 auto',
      }}
    >
      <List sx={{ width: '100%', maxWidth: 300 }}>
        {filteredContacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            disableGutters
            style={{
              padding: '5px',
              marginBottom: '5px',
              borderRadius: '5px',
              backgroundColor: '#f3f3f3',
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                style: { fontFamily: 'system-ui, sans-serif' },
              }}
              primary={`${name}: ${number}`}
            />
            <IconButton
              onClick={() => dispatch(deleteContact(id))}
              type="button"
              name="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
