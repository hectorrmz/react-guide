import React, { useState } from 'react';

import Card from './UI/Card';

import styles from './AddUser.module.css';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (!username.trim() || !age.trim()) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid data for username and age',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter valid age (<0)',
      });
      return;
    }

    onAddUser({ username, age, id: Math.random() });

    setUsername('');
    setAge('');
  };

  const usernameHandler = (e) => setUsername(e.target.value);

  const ageHandler = (e) => setAge(e.target.value);

  const closeModalHandler = () => setError();

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">User</label>
          <input
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
