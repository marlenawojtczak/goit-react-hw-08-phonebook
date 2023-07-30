import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Label } from './RegisterForm.styled';
import { TextField, Button } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
          label="Username"
          variant="standard"
          type="text"
          name="name"
          placeholder="Enter your username"
          pattern="^[^\d]+$"
          title="The name can only contain letters,
        apostrophes, hyphens, and indentations"
          required
          autoComplete="off"
          style={{ width: '300px' }}
          InputLabelProps={{
            style: {
              fontFamily: 'system-ui, sans-serif',
            },
          }}
        />
      </Label>
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
          InputLabelProps={{
            style: {
              fontFamily: 'system-ui, sans-serif',
            },
          }}
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
        Register
      </Button>
    </Form>
  );
};
