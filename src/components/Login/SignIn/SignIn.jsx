import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { postSessionRequest } from './services/actions';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: ''
  };

  const onSignInHandler = (values) => {
    dispatch(postSessionRequest(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => onSignInHandler(values)}>
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
          <button className={styles.authForm__submitBtn} type="submit">
            Sign In
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignIn;
