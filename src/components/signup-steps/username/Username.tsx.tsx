import { Question } from '../../question/Question';
import styles from './username.module.css';
import { useRegisterContext } from '../../../contexts/RegistrationContext';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Username = () => {
  const { backStep, handleUserData, userData } = useRegisterContext();
  const [value, setValue] = useState(userData?.username || '');

  const onNext = () => {
    let namePattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]+$/;
    if (value.length > 12) {
      toast('Username should be maximum 12 characters', { type: 'warning' });
      return;
    }
    if (!namePattern.test(value)) {
      toast(
        'Username should contain a-z || A-Z, can contain "_" and numbers.',
        { type: 'warning' }
      );
      return;
    }
    handleUserData?.('username', value);
  };

  return (
    <div className={styles.username_container}>
      <div className={styles.username_box}>
        <Question question={'Choose a username.'} />
        <input
          placeholder={'Username'}
          className={styles.username_input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.username_next_btn} onClick={onNext}>
          Next
        </button>
        <p
          className={styles.username_back_btn}
          onClick={() => backStep?.('username')}
        >
          Back
        </p>
      </div>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default Username;
