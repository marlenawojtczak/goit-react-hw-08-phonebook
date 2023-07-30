import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Wrapper, Text } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome, {user.name}!</Text>{' '}
      <Button
        onClick={() => dispatch(logOut())}
        variant="outlined"
        type="button"
        style={{
          dispplay: 'block',
          margin: '0 auto',
          fontFamily: 'system-ui, sans-serif',
          fontWeight: '600',
        }}
      >
        Logout
      </Button>{' '}
    </Wrapper>
  );
};
