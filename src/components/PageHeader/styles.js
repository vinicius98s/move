import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 30;
  align-items: center;
  justify-content: center;
  margin-bottom: 20;
  margin-top: 20;
  flex-direction: row;
  position: relative;
`;

export const Title = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 20;
  color: #898989;
`;

export const RightIconWrapper = styled.View`
  position: absolute;
  right: 0;
`;
