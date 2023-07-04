import avatar from '../../assets/images/image 5.png';
import styles from './question.module.css';

export const Question = ({ question }: { question: string }) => {
  return (
    <div className={styles.question_box}>
      <div className={styles.question_row}>
        <img className={styles.question_img} alt={'avatar'} src={avatar} />
      </div>
      <div className={styles.question_row}>
        <p className={styles.question_text}>{question}</p>
      </div>
    </div>
  );
};
