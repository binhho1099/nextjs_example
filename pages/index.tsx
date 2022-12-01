import { LoginForm } from '@components/auth';
import { MonopolyCard } from '@components/shared/cards';
import type { NextPage } from 'next';
import React from 'react';
// import { Button } from '../stories/Button';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <LoginForm />
      <div style={{ maxWidth: '200px', margin: '0 auto' }}>
        <MonopolyCard
          imageSrc="/assets/test-main.jpg"
          imageSeoTag="test"
          title="test title"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam deleniti dolorum! Sint, provident sunt."
          authorImage="/assets/test-main.jpg"
          authorName="Author"
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
