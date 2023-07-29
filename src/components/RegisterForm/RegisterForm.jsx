import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styled';

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
        Username
        <Input
          type="text"
          name="name"
          placeholder="Enter your username"
          pattern="^[^\d]+$"
          title="The name can only contain letters, apostrophes, hyphens, and indentations"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid e-mail address"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
