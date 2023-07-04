import { Question } from '../../question/Question';
import styles from './birthdate.module.css';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useRegisterContext } from '../../../contexts/RegistrationContext';
import moment from 'moment';
import { ArrowIcon } from '../../icons/ArrowIcon';
import { InputLabel } from '@mui/material';
import { toast } from 'react-toastify';

const Birthdate = () => {
  const { backStep, handleUserData, userData } = useRegisterContext();
  const [day, setDay] = useState(
    userData?.DOB ? moment(userData?.DOB).format('D') : ''
  );
  const [month, setMonth] = useState(
    userData?.DOB ? moment(userData?.DOB).format('MMMM') : ''
  );
  const [year, setYear] = useState(
    userData?.DOB ? moment(userData?.DOB).format('YYYY') : ''
  );
  const days = moment().daysInMonth();
  const months = moment.months();
  const years = Array.from(
    { length: moment().year() - 18 - 1900 + 1 },
    (_, index) => 1900 + index
  ).reverse();

  const onNext = () => {
    const format = 'D MMMM YYYY';
    const dateString = `${day} ${month} ${year}`;

    const parsedDate = moment(dateString, format, true);
    const isValid = parsedDate.isValid();
    if (!isValid) {
      toast('Invalid date', { type: 'warning' });
      return;
    }
    const formattedDate = moment(
      `${day} ${month} ${year}`,
      'DD MMMM YYYY'
    ).format('YYYY-MM-DD');
    handleUserData?.('DOB', formattedDate);
  };
  return (
    <div className={styles.birthdate_container}>
      <div className={styles.birthdate_box}>
        <Question question={'What is your age?'} />
        <p className={styles.birthdate_note}>
          You must be at least 18 years old to use Intim Flort
        </p>
        <div
          className={styles.birthdate_select_row}
          style={{ display: 'flex' }}
        >
          <div style={{ flexGrow: 1 }}>
            <FormControl>
              <InputLabel>Day</InputLabel>
              <Select
                value={day}
                placeholder={'Day'}
                IconComponent={ArrowIcon}
                onChange={(e) => setDay(e.target.value)}
              >
                {Array.from(Array(days).keys()).map((i) => (
                  <MenuItem key={i} value={i}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div style={{ flexGrow: 1.5, margin: '0 24px' }}>
            <FormControl>
              <InputLabel>Month</InputLabel>
              <Select
                value={month}
                placeholder={'Month'}
                IconComponent={ArrowIcon}
                onChange={(e) => setMonth(e.target.value)}
              >
                {months.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div style={{ flexGrow: 1 }}>
            <FormControl>
              <InputLabel>Year</InputLabel>
              <Select
                value={year}
                placeholder={'Year'}
                IconComponent={ArrowIcon}
                onChange={(e) => setYear(e.target.value)}
              >
                {years.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <button className={styles.birthdate_next_btn} onClick={onNext}>
          Next
        </button>
        <p
          className={styles.birthdate_back_btn}
          onClick={() => backStep?.('birthdate')}
        >
          {' '}
          Back{' '}
        </p>
      </div>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default Birthdate;
