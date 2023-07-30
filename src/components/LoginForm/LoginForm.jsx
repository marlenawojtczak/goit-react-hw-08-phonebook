import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, Label } from './LoginForm.styled';
import { TextField, Button } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          name="email"
          placeholder="Enter your email address"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid e-mail address"
          required
          style={{ width: '300px' }}
        />
      </Label>
      <Label>
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          placeholder="Enter your password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
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
        endIcon={<LockOpenOutlinedIcon />}
        style={{
          width: '300px',
          dispplay: 'block',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        Log In
      </Button>
    </Form>
  );
};
