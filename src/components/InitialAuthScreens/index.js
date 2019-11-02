import React from 'react';
import {Dimensions, StatusBar} from 'react-native';

import {
  Container,
  LogoWrapper,
  LogoText,
  PagesButtons,
  PagesText,
  FormsWrapper,
  ActionsButton,
  ForgotPasswordText,
} from './styles';

import Button from '../Button';
import Input from '../Input';
import Logo from '../../assets/Logo';
import Background from '../../assets/Background';

export default function InitialAuthScreens() {
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <Background />
      <Container>
        <LogoWrapper>
          <Logo />
          <LogoText>MOVE</LogoText>
        </LogoWrapper>
        <PagesButtons>
          <PagesText isActive>Login</PagesText>
          <PagesText>Cadastro</PagesText>
        </PagesButtons>
        <FormsWrapper>
          <Input placeholder="Email" icon="email-outline" />
          <Input placeholder="Senha" icon="lock-outline" />
          <ForgotPasswordText>Esqueci minha senha!</ForgotPasswordText>
        </FormsWrapper>
        <ActionsButton width={width} height={height - StatusBar.currentHeight}>
          <Button title="Entrar" />
        </ActionsButton>
      </Container>
    </>
  );
}
