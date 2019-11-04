import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import {Container, ForgotPasswordText, InputsWrapper} from './styles';

import InitialAuthScreens from '../../components/InitialAuthScreens';
import Input from '../../components/Input';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  console.tron.log(navigation);

  const handleKeyboardShow = () => {
    setIsKeyboardShown(true);
  };

  const handleKeyboardHide = () => {
    setIsKeyboardShown(false);
  };

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
    const keyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide,
    );

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  });

  return (
    <InitialAuthScreens expandForm={isKeyboardShown}>
      <Container>
        <InputsWrapper>
          <Input
            placeholder="E-mail"
            icon="email-outline"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Senha"
            icon="lock-outline"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </InputsWrapper>
        <ForgotPasswordText>Esqueci minha senha!</ForgotPasswordText>
      </Container>
    </InitialAuthScreens>
  );
}
