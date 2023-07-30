import { Navigation, UserMenu, AuthNav } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}{' '}
    </Header>
  );
};

export default AppBar;
