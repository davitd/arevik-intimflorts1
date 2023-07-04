import { Question } from '../../question/Question';
import styles from './password.module.css';
import { useRegisterContext } from '../../../contexts/RegistrationContext';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Password = () => {
  const { backStep, handleUserData, userData } = useRegisterContext();
  const [password, setPassword] = useState(userData?.password || '');
  const onNext = () => {
    let passwordPattern = /^(?=.*\d).{6,16}$/;
    if (!passwordPattern.test(password)) {
      toast(
        'Password should be 6 - 16 characters and contain at least one number',
        { type: 'warning' }
      );
      return;
    }
    handleUserData?.('password', password);
  };
  return (
    <div className={styles.password_container}>
      <div className={styles.password_box}>
        <Question question={'Set  your password.'} />
        <p className={styles.password_note}>
          More than 6 characters. Includes at least 1 number
        </p>
        <div>
          <input
            placeholder={'Password'}
            className={styles.password_input}
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.password_next_btn} onClick={onNext}>
          Next
        </button>
        <p
          className={styles.password_back_btn}
          onClick={() => backStep?.('password')}
        >
          Back
        </p>
      </div>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default Password;
