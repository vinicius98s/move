import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  width: 150;
  height: 50;
  border-radius: 25;
  align-items: center;
  justify-content: center;
  background: ${({theme, secondary}) =>
    secondary ? theme.colors.white : theme.colors.green};
  border-width: ${({secondary}) => (secondary ? 1 : 0)};
  border-color: ${({theme}) => theme.colors.lightGrey};
`;

export const ButtonTitle = styled.Text`
  color: ${({theme, secondary}) =>
    secondary ? '#2e2e2e' : theme.colors.white};
  font-size: 16;
  font-weight: bold;
`;
