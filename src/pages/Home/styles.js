import styled from 'styled-components/native';

export const Balance = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 20;
  position: absolute;
  right: 20;
  top: 20;
  min-width: 170;
  height: 60;
  z-index: 999;
`;

export const BalanceValue = styled.Text`
  color: ${({theme}) => theme.colors.green};
  font-family: 'Roboto-Regular';
  font-size: 18;
`;

export const BalanceText = styled.Text`
  color: #2e2e2e;
  font-family: 'Nunito-Regular';
  font-size: 16;
  margin-right: 7;
`;

export const ScanWrapper = styled.View`
  position: absolute;
  width: 100%;
  padding-right: 20;
  padding-left: 20;
  bottom: 20;
  align-items: center;
  z-index: 2;
`;

export const ScanButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60;
  border-radius: 20;
`;
