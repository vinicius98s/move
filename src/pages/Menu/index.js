import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import {withTheme} from 'styled-components';
import {
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-eva-icons';

import {
  Container,
  Header,
  PersonInfo,
  PersonName,
  ViewProfile,
  PhotoProfile,
  CloseButtonWrapper,
  MenuItem,
  MenuIcon,
  MenuText,
  HideSplash,
  Green,
} from './styles';
import {MENU_LIST} from './constants';

import {handleApiRequest} from '../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Menu({navigation, theme}) {
  const {width, height} = Dimensions.get('window');
  const [translateX] = useState(new Animated.Value(-width));
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getUserName = async () => {
    setIsLoading(true);
    try {
      const {data} = await handleApiRequest({
        method: 'get',
        endpoint: '/users',
      });
      setName(data.name);
    } catch (e) {
      setError('Erro ao encontrar usuário');
    } finally {
      setIsLoading(false);
    }
  };

  const triggerAnimation = () =>
    Animated.timing(translateX, {
      toValue: 0,
      easing: Easing.ease,
      duration: 300,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    getUserName();

    const willBlur = navigation.addListener('willBlur', () => {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 0,
        useNativeDriver: true,
      }).start();
    });

    if (navigation.isFocused) {
      triggerAnimation();
    }

    const willFocus = navigation.addListener('willFocus', () => {
      triggerAnimation();
    });

    return () => {
      willBlur.remove();
      willFocus.remove();
    };
  }, []);

  return (
    <HideSplash>
      <Animated.View style={{...styles.container, translateX}}>
        <Container>
          <Header>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : error ? (
              <PersonName>{error}</PersonName>
            ) : (
              <>
                <PhotoProfile />
                <PersonInfo>
                  <PersonName>{name}</PersonName>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}>
                    <ViewProfile>visualizar perfil</ViewProfile>
                  </TouchableOpacity>
                </PersonInfo>
              </>
            )}
          </Header>
          {MENU_LIST.map(menu => (
            <TouchableOpacity
              key={menu.title}
              onPress={() => {
                if (menu.onPress) {
                  menu.onPress(navigation);
                }
              }}>
              <MenuItem>
                {typeof menu.icon === 'string' ? (
                  <MenuIcon name={menu.icon} fill={theme.colors.orange} />
                ) : (
                  menu.icon()
                )}
                <MenuText>{menu.title}</MenuText>
              </MenuItem>
            </TouchableOpacity>
          ))}
        </Container>
        <Green height={height}>
          <CloseButtonWrapper>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="close-outline"
                width="30"
                height="30"
                fill={theme.colors.black}
              />
            </TouchableOpacity>
          </CloseButtonWrapper>
        </Green>
      </Animated.View>
    </HideSplash>
  );
}

export default withNavigation(withTheme(Menu));
