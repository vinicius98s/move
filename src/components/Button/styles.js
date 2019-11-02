import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  width: 150;
  height: 50;
  border-radius: 25;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.green};
`;

export const ButtonTitle = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 16;
  font-weight: bold;
`;
