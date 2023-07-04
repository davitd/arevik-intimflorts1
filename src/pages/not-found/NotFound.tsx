import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './not-found.module.css';
import Footer from '../../components/footer/Footer';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#F76448!important',
    '&:hover': {
      backgroundColor: '#F76448',
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
    },
  },
  typography: {
    fontSize: '36px!important',
    fontWeight: 'bold!important',
    color: 'rgba(247, 100, 72, 0.8)',
    marginBottom: '50%!important',
    marginTop: '10%!important',
  },
}));

export const NotFound = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        style={{
          textAlign: 'center',
        }}
      >
        <h3 className={styles.not_found_h3}>
          4
          <FavoriteIcon
            fontSize={'large'}
            htmlColor={'#F76448'}
            className={styles.not_found_heart}
          />
          4
        </h3>
        <Typography className={classes.typography}>Page Not Found</Typography>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => navigate('/')}
        >
          Back
        </Button>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
