import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>New User Information </p>
      </Route>
    </>
  );
};

export default Welcome;
