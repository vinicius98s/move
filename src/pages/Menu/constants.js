import React from 'react';
import signOut from '../../utils/signOut';
import Logo from '../../assets/Logo';

export const MENU_LIST = [
  {
    icon: 'credit-card-outline',
    title: 'Minha carteira',
    onPress: navigation => navigation.navigate('Wallet'),
  },
  {
    icon: 'clock-outline',
    title: 'Minhas viagens',
    onPress: navigation => navigation.navigate('Profile'),
  },
  {
    icon: 'award-outline',
    title: 'Conquistas',
    onPress: navigation => navigation.navigate('Profile'),
  },
  {
    icon: 'bulb-outline',
    title: 'Tutorial',
    onPress: navigation => navigation.navigate('FirstLogin'),
  },
  {
    icon: () => <Logo width={20} height={20} />,
    title: 'Sobre o Move',
    onPress: navigation => navigation.navigate('About'),
  },
  {
    icon: 'question-mark-circle-outline',
    title: 'Central de ajuda',
    onPress: null,
  },
  {
    icon: 'book-open-outline',
    title: 'Políticas de privacidade',
    onPress: null,
  },
  {
    icon: 'log-out-outline',
    title: 'Sair',
    onPress: signOut,
  },
];
