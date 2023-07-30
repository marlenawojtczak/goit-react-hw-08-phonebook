import { Wrapper, StyledButton } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledButton
        component={NavLink}
        to="/register"
        variant="outlined"
        type="button"
      >
        Register
      </StyledButton>{' '}
      <StyledButton
        component={NavLink}
        to="/login"
        variant="outlined"
        type="button"
      >
        Log In
      </StyledButton>
    </Wrapper>
  );
};
