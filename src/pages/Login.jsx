import { LoginForm } from '../components';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
