import React from 'react';
import {TouchableOpacity} from 'react-native';
import {withTheme} from 'styled-components';
import {withNavigation} from 'react-navigation';

import {
  Container,
  ProfileHeader,
  ProfileInfo,
  ProfilePhoto,
  ProfileEmail,
  ProfileName,
  StyledIcon as Icon,
  Wrapper,
  TripWrapper,
  TripText,
  Trip,
  TripValue,
  Button,
  ButtonText,
} from './styles';

import Header from '../../components/PageHeader';
import Section from '../../components/Section';
import signOut from '../../utils/signOut';

function SignOut({fillColor, navigation}) {
  return (
    <TouchableOpacity onPress={() => signOut(navigation)}>
      <Icon name="log-out-outline" fill={fillColor} />
    </TouchableOpacity>
  );
}

function Profile({theme, navigation}) {
  return (
    <>
      <Container>
        <Header
          title="Seu Perfil"
          rightIcon={() => (
            <SignOut navigation={navigation} fillColor={theme.colors.orange} />
          )}
        />
        <ProfileHeader>
          <ProfilePhoto />
          <ProfileInfo>
            <ProfileName>Vinicius Sales</ProfileName>
            <ProfileEmail>vinicius.2010.s@gmail.com</ProfileEmail>
          </ProfileInfo>
          <Icon name="edit-outline" fill={theme.colors.orange} />
        </ProfileHeader>
      </Container>
      <Wrapper>
        <Section title="Minhas viagens:">
          <Trip>
            <TripWrapper>
              <Icon name="map-outline" fill={theme.colors.orange} />
              <TripText>Viagens realizadas:</TripText>
            </TripWrapper>
            <TripValue>12</TripValue>
          </Trip>
          <Trip>
            <TripWrapper>
              <Icon name="navigation-outline" fill={theme.colors.orange} />
              <TripText>Km rodados:</TripText>
            </TripWrapper>
            <TripValue>10 Km</TripValue>
          </Trip>
          <Button onPress={() => {}}>
            <ButtonText>Ver todas</ButtonText>
          </Button>
        </Section>
        <Section title="Minhas conquistas">
          <Button onPress={() => {}}>
            <ButtonText>Ver todas</ButtonText>
          </Button>
        </Section>
      </Wrapper>
    </>
  );
}

export default withTheme(withNavigation(Profile));
