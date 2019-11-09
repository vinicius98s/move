import styled from 'styled-components/native';

export const ForgotPasswordText = styled.Text`
  color: #2e2e2e;
  align-self: flex-end;
  font-family: 'Roboto-LightItalic';
  margin-top: 20;
  margin-left: auto;
`;

export const InputsWrapper = styled.View`
  justify-content: space-around;
  height: 75%;
  padding-top: 25;
`;

export const Container = styled.View`
  flex: 1;
  height: 260;
`;

export const FormActionsWrapper = styled.View`
  flex-direction: row;
  position: relative;
  justify-content: space-between;
`;

export const LoginError = styled.Text`
  color: ${({theme}) => theme.colors.red};
  font-family: 'Nunito-Regular';
  position: absolute;
  margin-top: -10;
  margin-left: 5;
`;
