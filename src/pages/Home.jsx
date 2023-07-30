import { Wrapper, Title, Text } from './Home.styled';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Title>Welcome to Phonebook!</Title>{' '}
      <Text>Log in or create a new account to enjoy using the application</Text>
    </Wrapper>
  );
};

export default Home;
