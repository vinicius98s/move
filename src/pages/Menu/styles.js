import styled from 'styled-components/native';
import {Icon} from 'react-native-eva-icons';

export const HideSplash = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding-right: 20;
  padding-left: 20;
  padding-top: 20;
  padding-bottom: 20;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding-bottom: 20;
  border-bottom-width: 1;
  border-bottom-color: #b7b7b7;
`;

export const PersonInfo = styled.View`
  margin-left: 20;
  justify-content: center;
`;

export const PersonName = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 16;
  margin-bottom: 3;
`;

export const ViewProfile = styled.Text`
  color: ${({theme}) => theme.colors.green};
  font-size: 12;
  font-family: 'Roboto-Regular';
`;

export const PhotoProfile = styled.View`
  width: 72;
  height: 72;
  border-radius: 36;
  background-color: ${({theme}) => theme.colors.green};
`;

export const CloseButtonWrapper = styled.View`
  margin-left: auto;
  margin-top: 15;
`;

export const MenuItem = styled.View`
  margin-bottom: 10;
  flex-direction: row;
  align-items: center;
  height: 50;
`;

export const MenuIcon = styled(Icon)`
  width: 20;
  height: 20;
`;

export const MenuText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 14;
  margin-left: 20;
  color: ${({theme}) => theme.colors.black};
`;
