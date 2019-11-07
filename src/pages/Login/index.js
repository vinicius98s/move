import React, {useState} from 'react';

import {Container, ForgotPasswordText, InputsWrapper} from './styles';

import InitialAuthScreens from '../../components/InitialAuthScreens';
import Input from '../../components/Input';

import useKeyboard from '../../utils/useKeyboard';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isKeyboardShown = useKeyboard();

  return (
    <InitialAuthScreens preventKeyboard={isKeyboardShown}>
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
