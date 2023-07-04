import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './signup-form.module.css';
import { useRegisterContext } from '../../contexts/RegistrationContext';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
  const { icons, screens, progress, currentScreen, changeScreen } =
    useRegisterContext();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={styles.signup_parent_container}>
        <div className={styles.signup_container}>
          <div className={styles.signup_icon_box}>
            {icons.map((icon, index) => {
              const currentIndex = icons.findIndex(
                (obj) => obj.step === currentScreen
              );
              const status =
                currentIndex > index
                  ? 'passed'
                  : currentIndex === index
                  ? 'active'
                  : 'disabled';
              const Component = icon.component;
              return (
                <Component
                  key={index}
                  onClick={changeScreen}
                  step={icon.step}
                  status={status}
                />
              );
            })}
          </div>
          <div style={{ padding: '0 123px', marginBottom: 40 }}>
            <LinearProgress
              value={progress}
              variant={'buffer'}
              sx={{
                '& .MuiLinearProgress-bar1Buffer': {
                  backgroundColor: '#FFDC22',
                  borderRadius: 36,
                },
                '& .MuiLinearProgress-bar2Buffer': {
                  backgroundColor: 'white',
                },
                height: 6,
                borderRadius: 36,
              }}
              valueBuffer={100}
            />
          </div>
          <div>
            {screens.map((item, index) => {
              if (item.step === currentScreen) {
                const Component = item.component;
                return <Component key={index} />;
              } else {
                return null;
              }
            })}
          </div>
          <div>
            <p className={styles.action_text}>
              Already have an account?
              <span
                className={styles.action_login}
                onClick={() => navigate('/under-construction')}
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
