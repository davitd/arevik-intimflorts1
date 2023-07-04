import { Question } from '../../question/Question';
import styles from './email.module.css';
import { useRegisterContext } from '../../../contexts/RegistrationContext';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { toast } from 'react-toastify';
import RegistrationService from '../../../services/RegistrationService';

const registrationService = new RegistrationService();

const Email = () => {
  const { backStep, userData, handleUserData } = useRegisterContext();
  const [email, setEmail] = useState(userData?.email || '');
  const [check, setCheck] = useState(false);

  const complete = async () => {
    if (!check) {
      toast(
        'You have to read and accept the Terms of Service and our Privacy Statement.',
        { type: 'info' }
      );
    }
    if (!email) {
      toast('You have to enter your email address.', { type: 'warning' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      toast('Please provide valid email.', { type: 'warning' });
      return;
    }
    handleUserData?.('email', email);
    const result = await registrationService.registration(
      userData?.username,
      email,
      userData?.DOB,
      userData?.gender,
      userData?.['date-type'],
      userData?.password,
      userData?.location,
      userData?.['looking-for']
    );
    if (result.Status === 'fail') {
      toast(result.Error.message, { type: 'error' });
      return;
    }
    if (result.Status === 'ok' && !result.missing_fields.length) {
      toast('Your registration was successfully', { type: 'success' });
      return;
    }
    if (result.Status === 'ok' && result.missing_fields.length) {
      localStorage.setItem('missing_fields', result.missing_fields);
      toast(`Fill missing fields: ${result.missing_fields.join(', ')}`, {
        type: 'warning',
      });
      return;
    }
  };
  return (
    <div className={styles.email_container}>
      <div className={styles.email_box}>
        <Question question={'Add your email address.'} />
        <input
          className={styles.email_input}
          placeholder={'Email'}
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Checkbox
          value={check}
          color={'success'}
          onChange={() => setCheck((p) => !p)}
        />
        <label className={styles.email_checkbox_lbl}>
          I have read and accept the{' '}
          <span className={styles.green_text}>Terms of Service</span> and our{' '}
          <span className={styles.green_text}>Privacy Statement</span>.
        </label>
        <button className={styles.email_complete_btn} onClick={complete}>
          Complete
        </button>
        <p
          className={styles.email_back_btn}
          onClick={() => backStep?.('email')}
        >
          Back
        </p>
      </div>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default Email;
