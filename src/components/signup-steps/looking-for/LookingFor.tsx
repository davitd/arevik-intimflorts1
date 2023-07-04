import { Question } from '../../question/Question';
import female from '../../../assets/images/image 55.png';
import male from '../../../assets/images/image 56.png';
import styles from './looking-for.module.css';
import { useRegisterContext } from '../../../contexts/RegistrationContext';

const LookingFor = () => {
  const { backStep, handleUserData, userData } = useRegisterContext();
  return (
    <div className={styles.seeking_for_container}>
      <Question question={'Who are you looking for?'} />
      <div className={styles.seeking_for_box}>
        <div className={styles.seeking_for_card}>
          <img
            alt={'female'}
            src={female}
            className={
              userData['looking-for'] === 'Female' ? styles.img_active : ''
            }
          />
          <button
            className={styles.seeking_for_btn}
            onClick={() => handleUserData?.('looking-for', 'Female')}
          >
            Seeking a woman
          </button>
        </div>
        <div className={styles.seeking_for_card}>
          <img
            alt={'male'}
            src={male}
            className={
              userData['looking-for'] === 'Male' ? styles.img_active : ''
            }
          />
          <button
            className={styles.seeking_for_btn}
            onClick={() => handleUserData?.('looking-for', 'Male')}
          >
            Seeking a man
          </button>
        </div>
      </div>
      <p
        className={styles.seeking_for_back_btn}
        onClick={() => backStep?.('looking-for')}
      >
        {' '}
        Back{' '}
      </p>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default LookingFor;
