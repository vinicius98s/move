import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.white};
  padding-left: 20;
  padding-right: 20;
  flex: 1;
`;

export const Balance = styled.View`
  background-color: ${({theme}) => theme.colors.darkBlue};
  border-radius: 20;
  width: 100%;
  height: 145;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`;

export const BalanceInfo = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
`;

export const BalanceText = styled.Text`
  color: ${({theme}) => theme.colors.orange};
  font-family: 'Nunito-Regular';
  font-size: 20;
`;

export const BalanceValue = styled.Text`
  color: ${({theme}) => theme.colors.green};
  font-size: 30;
  font-family: 'Roboto-Regular';
`;

export const AddBalanceButton = styled.TouchableOpacity`
  width: 165;
  height: 40;
  border-radius: 20;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-top: auto;
`;

export const AddBalanceText = styled.Text`
  color: ${({theme}) => theme.colors.orange};
  font-family: 'Roboto-Regular';
  font-size: 14;
`;
