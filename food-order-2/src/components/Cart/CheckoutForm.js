import React from 'react';

import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ form, onInputChange }) => {
  const inputChangeHandler = (event) => {
    onInputChange(event.target.name, event.target.value);
  };

  return (
    <form className={styles['checkout-form']}>
      <div className={styles['form-control']}>
        <label>Name</label>
        <input
          value={form.name.value}
          type="text"
          name="name"
          onChange={inputChangeHandler}
          onBlur={inputChangeHandler}
        />
        {!form.name.isValid && form.name.touched && (
          <p className={styles.error}> Please enter a valid Name </p>
        )}
      </div>
      <div className={styles['form-control']}>
        <label>Address</label>
        <input
          value={form.address.value}
          type="text"
          name="address"
          onChange={inputChangeHandler}
          onBlur={inputChangeHandler}
        />
        {!form.address.isValid && form.address.touched && (
          <p className={styles.error}> Please enter a valid Address </p>
        )}
      </div>
      <div className={styles['form-control']}>
        <label>Zip code</label>
        <input
          value={form.zipCode.value}
          type="text"
          name="zipCode"
          onChange={inputChangeHandler}
          onBlur={inputChangeHandler}
        />
        {!form.zipCode.isValid && form.zipCode.touched && (
          <p className={styles.error}> Please enter a valid Zip Code </p>
        )}
      </div>
      <div className={styles['form-control']}>
        <label>City</label>
        <input
          value={form.city.value}
          type="text"
          name="city"
          onChange={inputChangeHandler}
          onBlur={inputChangeHandler}
        />
        {!form.city.isValid && form.city.touched && (
          <p className={styles.error}> Please enter a valid City </p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
