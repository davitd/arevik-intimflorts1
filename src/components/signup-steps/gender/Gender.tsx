import { Question } from '../../question/Question';
import styles from './gender.module.css';
import female from '../../../assets/images/image 52.png';
import male from '../../../assets/images/image 54.png';
import { useRegisterContext } from '../../../contexts/RegistrationContext';

const Gender = () => {
  const { backStep, handleUserData, userData } = useRegisterContext();
  return (
    <div className={styles.gender_container}>
      <Question question={'What is your gender?'} />
      <div className={styles.gender_box}>
        <div className={styles.gender_card}>
          <img
            alt={'Male'}
            src={male}
            className={userData?.gender === 'Male' ? styles.img_active : ''}
          />
          <button
            className={styles.gender_btn}
            onClick={() => handleUserData?.('gender', 'Male')}
          >
            I am man
          </button>
        </div>
        <div className={styles.gender_card}>
          <img
            alt={'Female'}
            src={female}
            className={userData?.gender === 'Female' ? styles.img_active : ''}
          />
          <button
            className={styles.gender_btn}
            onClick={() => handleUserData?.('gender', 'Female')}
          >
            I am woman
          </button>
        </div>
      </div>
      <p
        className={styles.gender_back_btn}
        onClick={() => backStep?.('gender')}
      >
        {' '}
        Back{' '}
      </p>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default Gender;
