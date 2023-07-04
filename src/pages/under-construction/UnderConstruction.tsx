import ConstructionIcon from '@mui/icons-material/Construction';
import styles from './under-construction.module.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Footer from '../../components/footer/Footer';
import { makeStyles } from '@mui/styles';
import { Button, Container, Typography } from '@mui/material';

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

export const UnderConstruction = () => {
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
        <ConstructionIcon className={styles.icon} sx={{ fontSize: 60 }} />
        <Typography className={classes.typography}>
          Page Under Construction
        </Typography>
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
