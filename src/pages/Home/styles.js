import styled from 'styled-components/native';
import {Icon} from 'react-native-eva-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.lightGrey};
`;

export const Balance = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: ${({openedCamera}) => (openedCamera ? 30 : 20)};
  position: absolute;
  right: 20;
  top: 20;
  min-width: ${({openedCamera}) => (openedCamera ? 60 : 170)};
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

export const ModalWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 99999;
`;

export const Modal = styled.View`
  width: 300;
  height: 245;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20;
  position: absolute;
  z-index: 999;
  align-self: center;
  justify-content: center;
  padding: 20px;
`;

export const CloseModalIcon = styled(Icon).attrs({
  fill: '#000',
})`
  width: 30;
  height: 30;
`;

export const ModalText = styled.Text`
  color: #898989;
  font-family: 'Nunito-Regular';
  font-size: 20;
  margin-right: 7;
`;

export const DisponibilityText = styled.Text`
  color: ${({theme}) => theme.colors.green};
  font-family: 'Roboto-Regular';
  font-size: 14;
`;

export const TextModalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
`;
