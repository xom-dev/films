import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { postUserRequest } from './services/actions';
import styles from '../SignIn/SignIn.module.scss';

const SignUp = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  };

  const onSignUpHandler = (values) => {
    dispatch(postUserRequest(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => onSignUpHandler(values)}>
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <fieldset className={styles.authForm__fieldset}>
            <label className={styles.authForm__label}>Email: </label>
            <input
              className={styles.authForm__input}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </fieldset>
          <fieldset className={styles.authForm__fieldset}>
            <label className={styles.authForm__label}>Name: </label>
            <input
              className={styles.authForm__input}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </fieldset>
          <fieldset className={styles.authForm__fieldset}>
            <label className={styles.authForm__label}>Password: </label>
            <input
              className={styles.authForm__input}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </fieldset>
          <fieldset className={styles.authForm__fieldset}>
            <label className={styles.authForm__label}>Confirm Pass: </label>
            <input
              className={styles.authForm__input}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
          </fieldset>
          <button className={styles.authForm__submitBtn} type="submit">
            SignUp
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
