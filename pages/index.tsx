import { LoginForm } from '@components/auth/login';
import type { NextPage } from 'next';
import React from 'react';
// import { Button } from '../stories/Button';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  );
};

export default Home;
