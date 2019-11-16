import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import {withTheme} from 'styled-components';
import {
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
  TouchableOpacity,
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
} from './styles';

import {MENU_LIST} from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Menu({navigation, theme}) {
  const {width} = Dimensions.get('window');
  const [translateX] = useState(new Animated.Value(-width));

  useEffect(() => {
    const willBlur = navigation.addListener('willBlur', () => {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 0,
        useNativeDriver: true,
      }).start();
    });

    const willFocus = navigation.addListener('willFocus', () => {
      Animated.timing(translateX, {
        toValue: 0,
        easing: Easing.ease,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      willBlur.remove();
      willFocus.remove();
    };
  });

  return (
    <Animated.View style={{...styles.container, translateX}}>
      <Container>
        <Header>
          <PhotoProfile />
          <PersonInfo>
            <PersonName>Vinicius Sales</PersonName>
            <ViewProfile>visualizar perfil</ViewProfile>
          </PersonInfo>
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
        </Header>
        {MENU_LIST.map(menu => (
          <MenuItem key={menu.title}>
            <MenuIcon name={menu.icon} fill={theme.colors.orange} />
            <MenuText>{menu.title}</MenuText>
          </MenuItem>
        ))}
      </Container>
    </Animated.View>
  );
}

export default withNavigation(withTheme(Menu));
