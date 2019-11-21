import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
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
  RewardsWrapper,
  BadgeIcon,
  BadgeWrapper,
  BadgeText,
} from './styles';

import {handleApiRequest} from '../../services/api';

import Header from '../../components/PageHeader';
import Section from '../../components/Section';
import signOut from '../../utils/signOut';

function SignOut({navigation}) {
  return (
    <TouchableOpacity onPress={() => signOut(navigation)}>
      <Icon name="log-out-outline" />
    </TouchableOpacity>
  );
}

function Profile({navigation}) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const getUserData = async () => {
    const {data} = await handleApiRequest({method: 'get', endpoint: '/users'});

    setProfile({
      name: data.name,
      email: data.email,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Header
        title="Seu Perfil"
        rightIcon={() => <SignOut navigation={navigation} />}
      />
      <Container>
        <ProfileHeader>
          <ProfilePhoto />
          <ProfileInfo>
            <ProfileName>{profile.name}</ProfileName>
            <ProfileEmail>{profile.email}</ProfileEmail>
          </ProfileInfo>
          <Icon name="edit-outline" />
        </ProfileHeader>
      </Container>
      <Wrapper>
        <Section title="Minhas viagens:" borderTop>
          <Trip>
            <TripWrapper>
              <Icon name="map-outline" />
              <TripText>Viagens realizadas:</TripText>
            </TripWrapper>
            <TripValue>12</TripValue>
          </Trip>
          <Trip>
            <TripWrapper>
              <Icon name="navigation-outline" />
              <TripText>Km rodados:</TripText>
            </TripWrapper>
            <TripValue>10 Km</TripValue>
          </Trip>
          <Button onPress={() => {}}>
            <ButtonText>Ver todas</ButtonText>
          </Button>
        </Section>
        <Section title="Minhas conquistas:">
          <RewardsWrapper>
            <BadgeWrapper>
              <BadgeIcon active />
              <BadgeText>1 km</BadgeText>
            </BadgeWrapper>
            <BadgeWrapper>
              <BadgeIcon active />
              <BadgeText>2 km</BadgeText>
            </BadgeWrapper>
            <BadgeWrapper>
              <BadgeIcon />
              <BadgeText>5 km</BadgeText>
            </BadgeWrapper>
          </RewardsWrapper>
          <RewardsWrapper last>
            <BadgeWrapper>
              <BadgeIcon active />
              <BadgeText>1 viagem</BadgeText>
            </BadgeWrapper>
            <BadgeWrapper>
              <BadgeIcon />
              <BadgeText>5 viagens</BadgeText>
            </BadgeWrapper>
            <BadgeWrapper>
              <BadgeIcon />
              <BadgeText>10 viagens</BadgeText>
            </BadgeWrapper>
          </RewardsWrapper>
          <Button onPress={() => {}}>
            <ButtonText>Ver todas</ButtonText>
          </Button>
        </Section>
      </Wrapper>
    </>
  );
}

export default withNavigation(Profile);
