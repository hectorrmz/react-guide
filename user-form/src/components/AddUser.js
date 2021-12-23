import React, { useRef, useState } from 'react';

import Card from './UI/Card';

import styles from './AddUser.module.css';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
  const [error, setError] = useState();
  const usernameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const age = ageRef.current.value;

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

    usernameRef.current.value = '';
    ageRef.current.value = '';
  };

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
          <input type="text" name="name" id="name" ref={usernameRef} />
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
