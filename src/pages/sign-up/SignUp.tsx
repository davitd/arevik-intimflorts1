import React from 'react';
import { SignupForm } from '../../components/signup-form/SignupForm';
import Footer from '../../components/footer/Footer';
import { Background } from '../../components/background/Background';

export const SignUp = () => {
  return (
    <React.Fragment>
      <SignupForm />
      <Background />
      <Footer />
    </React.Fragment>
  );
};
