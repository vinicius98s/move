import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View.attrs({
  elevation: 1,
})`
  border-radius: 10;
  width: 100%;
  height: 85%;
  background: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: space-between;
  padding-top: 80;
  padding-right: 20;
  padding-bottom: 40;
  padding-left: 20;
`;

export const CardTitle = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 22;
  color: ${({theme}) => theme.colors.darkBlue};
  text-align: center;
`;

export const CardDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14;
  text-align: center;
  margin-top: 20;
  color: #898989;
`;

export const ActionsIndicator = styled.View`
  flex-direction: row;
  padding-right: 20;
  padding-left: 20;
  justify-content: space-between;
  margin-bottom: 20;
  align-items: center;
`;

export const CardIndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 20;
  padding-left: 20;
  padding-top: 30;
`;

export const CardIndicatorBulletWrapper = styled.View`
  flex-direction: row;
`;

export const CardIndicatorBullet = styled.View`
  width: 10;
  height: 10;
  border-radius: 5;
  margin-right: 5;
  background: ${({theme, active}) =>
    active ? theme.colors.orange : 'transparent'};
  border-width: 1;
  border-color: ${({theme}) => theme.colors.orange};
`;

export const CardIndicator = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 20;
  color: ${({theme}) => theme.colors.darkBlue};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  color: ${({theme, color}) => theme.colors[color] || theme.colors.darkBlue};
  font-size: 14;
`;

export const TitleAndDescriptionWrapper = styled.View``;
