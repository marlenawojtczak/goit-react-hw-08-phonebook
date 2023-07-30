import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../../components';
import { Wrapper } from './SharedLayout.styled';
import { Loader } from '../../components';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
