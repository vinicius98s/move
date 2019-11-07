import React, {useState} from 'react';

import InitialAuthScreens from '../../components/InitialAuthScreens';
import Input from '../../components/Input';
import useKeyboard from '../../utils/useKeyboard';

import {InputsWrapper} from './styles';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLastInputFocused, setIsLastInputFocused] = useState(false);

  const isKeyboardShown = useKeyboard();

  return (
    <InitialAuthScreens preventKeyboard expandForm>
      <InputsWrapper isLastInputFocused={isLastInputFocused && isKeyboardShown}>
        <Input
          placeholder="Nome"
          icon="person-outline"
          value={name}
          onChangeText={text => setName(text)}
        />
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
        <Input
          placeholder="Confirmar senha"
          icon="lock-outline"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
          onFocus={() => setIsLastInputFocused(true)}
          onBlur={() => setIsLastInputFocused(false)}
        />
      </InputsWrapper>
    </InitialAuthScreens>
  );
}
