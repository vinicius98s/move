import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 30;
  align-items: center;
  justify-content: center;
  min-height: 60;
  flex-direction: row;
  position: relative;
  background-color: ${({theme}) => theme.colors.white};
  padding-left: 20;
  padding-right: 20;
`;

export const Title = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 20;
  color: #898989;
`;

export const RightIconWrapper = styled.View`
  position: absolute;
  right: 20;
`;
