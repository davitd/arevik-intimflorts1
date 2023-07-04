import { Question } from '../../question/Question';
import Stack from '@mui/material/Stack';
import styles from './date-type.module.css';
import { useRegisterContext } from '../../../contexts/RegistrationContext';

const BTN_DATA = [
  {
    value: 'Casual Dating',
  },
  {
    value: 'Couple of Dates',
  },
  {
    value: 'Serious Relationship',
  },
];

const DateType = () => {
  const { handleUserData, userData } = useRegisterContext();
  return (
    <div className={styles.looking_for_container}>
      <div className={styles.looking_for_box}>
        <Question question={'What are you looking for?'} />
        <Stack spacing={2} direction="column">
          {BTN_DATA.map((data, index) => {
            const active = userData['date-type'] === data.value;
            return (
              <button
                key={index}
                className={`${styles.looking_for_btn} ${
                  active ? styles.looking_for_btn_active : ''
                }`}
                onClick={() => handleUserData?.('date-type', data.value)}
              >
                {data.value}
              </button>
            );
          })}
        </Stack>
      </div>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default DateType;
