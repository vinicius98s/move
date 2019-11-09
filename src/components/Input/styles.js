import styled from 'styled-components/native';
import {Icon} from 'react-native-eva-icons';

export const InputIcon = styled(Icon)`
  position: absolute;
  margin-top: 13;
  margin-left: 20;
`;

export const InputWrapper = styled.View`
  width: 100%;
  height: 50;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#5C5C5C',
})`
  width: 100%;
  height: 100%;
  border-radius: 25;
  border-width: 1;
  padding-left: 54;
  border-color: ${({theme, isActive}) =>
    isActive ? theme.colors.orange : theme.colors.lightGrey};
  font-style: ${({hasValue}) => (hasValue ? 'normal' : 'italic')};
  font-family: 'Roboto-Regular';
`;

export const ErrorIcon = styled(Icon)`
  margin-right: 3;
`;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export const ErrorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 20;
  margin-top: 2;
  font-family: 'Nunito-Regular';
`;
