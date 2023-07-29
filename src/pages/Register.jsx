import { RegisterForm } from '../components';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default Register;
