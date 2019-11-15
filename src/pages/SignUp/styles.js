import styled, {css} from 'styled-components/native';

export const InputsWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  padding-top: 25;
  padding-bottom: 25;

  ${({isLastInputFocused}) =>
    isLastInputFocused &&
    css`
      position: absolute;
      left: 20;
      bottom: 80;
    `};
`;

export const SignUpError = styled.Text`
  color: ${({theme}) => theme.colors.red};
  font-family: 'Nunito-Regular';
  margin-left: 5;
`;
