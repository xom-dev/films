import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
