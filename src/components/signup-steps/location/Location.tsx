import { Question } from '../../question/Question';
import styles from './location.module.css';
import { useRegisterContext } from '../../../contexts/RegistrationContext';
import { SearchIcon } from '../../icons/SearchIcon';
import { useCallback, useState } from 'react';
import RegistrationService from '../../../services/RegistrationService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const register = new RegistrationService();

const Location = () => {
  const { backStep, userData, handleUserData } = useRegisterContext();
  const [value, setValue] = useState(userData?.location || '');
  const [locations, setLocations] = useState([]);

  const getLocations = useCallback(async () => {
    if (!value) {
      return;
    }
    const result = await register.location(value);
    setLocations(result.Data);
  }, [value]);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onClick = (value: string) => {
    setValue(value);
    setLocations([]);
  };
  const onNext = () => {
    if (value) {
      handleUserData?.('location', value);
    }
  };
  return (
    <div className={styles.location_container}>
      <div className={styles.location_box}>
        <Question question={'What is your location?'} />
        <p className={styles.location_note}>
          Your location will never be shared with third parties, you data is
          secure
        </p>
        <div style={{ position: 'relative' }}>
          <input
            placeholder={'London,UK'}
            className={styles.location_input}
            onChange={onChange}
            value={value}
          />
          <SearchIcon onClick={getLocations} />
          {locations.length > 0 && (
            <>
              <List
                sx={{
                  position: 'absolute',
                  zIndex: 9999,
                  backgroundColor: 'white',
                  width: '-webkit-fill-available',
                }}
              >
                {locations.map((item, i) => (
                  <ListItem key={`item-${i}-${item}`}>
                    <ListItemText
                      primary={item}
                      style={{
                        cursor: 'pointer',
                        borderBottom: '1px solid #F76448',
                      }}
                      onClick={() => onClick(item)}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </div>
        <button className={styles.location_next_btn} onClick={onNext}>
          Next
        </button>
        <p
          className={styles.location_back_btn}
          onClick={() => backStep?.('location')}
        >
          Back
        </p>
      </div>
      <hr className={styles.divider_line} />
    </div>
  );
};

export default Location;
