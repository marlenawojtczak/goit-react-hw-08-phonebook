import { Wrapper, Title } from './Home.styled';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Title>Welcome to Phonebook!</Title>{' '}
    </Wrapper>
  );
};

export default Home;
