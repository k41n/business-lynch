import React from 'react';
import { handleSignIn } from './actions';
import Logo from './assets/logo.svg';

import { Container, SigninButton } from './styles';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <SigninButton onClick={handleSignIn}>
        <Logo />
        Login with Cacoo
      </SigninButton>
    </Container>
  )
}