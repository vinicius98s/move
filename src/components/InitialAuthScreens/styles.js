import styled from 'styled-components/native';

export const LogoWrapper = styled.View`
  width: 100%;
  margin-top: 50;
  height: 50;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  color: ${({theme}) => theme.colors.lightGrey};
  font-size: 40;
  margin-left: 10;
`;

export const Container = styled.View`
  flex: 1;
  z-index: 1;
  padding-left: 20;
  padding-right: 20;
`;

export const PagesButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20;
  padding-right: 20;
  margin-top: 60;
  width: 100%;
  height: 30;
`;

export const PagesText = styled.Text`
  color: ${({isActive, theme}) =>
    isActive ? theme.colors.white : theme.colors.lightGrey};
  font-size: 22;
`;

export const FormsWrapper = styled.View.attrs({
  elevation: 1,
})`
  background: ${({theme}) => theme.colors.white};
  border-radius: 10;
  margin-top: 20;
  padding-right: 20;
  padding-left: 20;
  height: 265;
  width: 100%;
  justify-content: space-around;
`;

export const ActionsButton = styled.View`
  position: absolute;
  width: ${({width}) => width};
  height: ${({height}) => height};
  padding-right: 20;
  padding-left: 20;
  justify-content: flex-end;
  padding-bottom: 50;
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  color: #2e2e2e;
  font-style: italic;
  align-self: flex-end;
`;
