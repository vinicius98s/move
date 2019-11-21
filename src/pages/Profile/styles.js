import styled from 'styled-components/native';
import {Icon} from 'react-native-eva-icons';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  padding-left: 20;
  padding-right: 20;
`;

export const ProfileHeader = styled.View`
  flex-direction: row;
  padding-bottom: 20;
  padding-top: 20;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePhoto = styled.View`
  width: 75;
  height: 75;
  border-radius: 36;
  background-color: ${({theme}) => theme.colors.green};
`;

export const ProfileInfo = styled.View`
  margin-left: 15;
  justify-content: center;
  margin-right: auto;
`;

export const ProfileName = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18;
  color: #5c5c5c;
`;

export const ProfileEmail = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12;
  color: #b7b7b7;
`;

export const StyledIcon = styled(Icon).attrs(({theme}) => ({
  fill: theme.colors.orange,
}))`
  width: 24;
  height: 24;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding-left: 20;
  padding-right: 20;
`;

export const Trip = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 10;
  margin-bottom: 10;
`;

export const TripWrapper = styled.View`
  flex-direction: row;
`;

export const TripText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 14;
  color: #2e2e2e;
  margin-left: 10;
`;

export const TripValue = styled.Text`
  color: ${({theme}) => theme.colors.green};
  font-family: 'Roboto-Regular';
  font-size: 20;
`;

export const Button = styled.TouchableOpacity`
  width: 185;
  height: 40;
  border-width: 1;
  border-color: #b7b7b7;
  border-radius: 10;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 30;
  margin-bottom: 20;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16;
  color: #b7b7b7;
`;

export const RewardsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({last}) => (last ? 0 : 40)};
`;

export const BadgeWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14;
  color: #b7b7b7;
`;

export const BadgeIcon = styled(Icon).attrs(({theme, active}) => ({
  name: 'award-outline',
  fill: active ? theme.colors.green : theme.colors.lightGrey,
}))`
  width: 50;
  height: 50;
`;
