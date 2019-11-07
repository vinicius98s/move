import React from 'react';
import {Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import {
  Container,
  LogoWrapper,
  LogoText,
  PagesButtons,
  PagesText,
  FormsWrapper,
  ActionsButton,
  ActionsButtonWrapper,
} from './styles';

import Button from '../Button';
import Logo from '../../assets/Logo';
import Background from '../../assets/Background';

function InitialAuthScreens({
  expandForm,
  preventKeyboard,
  children,
  navigation,
}) {
  const {width, height} = Dimensions.get('window');

  const currentRoute = navigation.state.routeName;
  const signUpScreen = currentRoute === 'SignUp';

  const navigateToLogin = () => navigation.navigate('Login');

  return (
    <>
      <Background />
      <Container>
        {!preventKeyboard && (
          <LogoWrapper>
            <Logo />
            <LogoText>MOVE</LogoText>
          </LogoWrapper>
        )}
        <PagesButtons preventKeyboard={preventKeyboard}>
          <TouchableOpacity onPress={navigateToLogin}>
            <PagesText isActive={currentRoute === 'Login'}>Login</PagesText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <PagesText isActive={signUpScreen}>Cadastro</PagesText>
          </TouchableOpacity>
        </PagesButtons>
        <FormsWrapper expandForm={expandForm}>{children}</FormsWrapper>
        <ActionsButton width={width} height={height - StatusBar.currentHeight}>
          <ActionsButtonWrapper signUpScreen={signUpScreen}>
            {signUpScreen && (
              <Button
                onPress={navigateToLogin}
                title="Voltar"
                variant="secondary"
              />
            )}
            <Button title={signUpScreen ? 'Próximo' : 'Entrar'} />
          </ActionsButtonWrapper>
        </ActionsButton>
      </Container>
    </>
  );
}

export default withNavigation(InitialAuthScreens);
