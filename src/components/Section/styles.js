import styled from 'styled-components/native';

export const SectionWrapper = styled.View`
  width: 100%;
  border-bottom-width: ${({noBorderBottom}) => (noBorderBottom ? 0 : 1)};
  border-top-width: ${({borderTop}) => (borderTop ? 1 : 0)};
  border-color: #b7b7b7;
  padding-top: 30;
  padding-bottom: 30;
`;

export const SectionTitle = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18;
  color: #2e2e2e;
  margin-bottom: 20;
`;
