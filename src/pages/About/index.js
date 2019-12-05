import React from 'react';
import {withNavigation} from 'react-navigation';
import styled from 'styled-components';

import Header from '../../components/PageHeader';
import Button from '../../components/Button';

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 20;
  color: #000;
  line-height: 30;
`;

const Container = styled.ScrollView`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

const About = ({navigation}) => {
  return (
    <>
      <Header title="Sobre a Move" />
      <Container
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <Text>
          CLÁUSULA DE RESERVA (Lei 9.610/98 - LEI DE DIREITOS AUTORAIS): Este
          aplicativo foi publicado e é mantido pelos discentes do 6º semestre,
          do Curso de Graduação em Design Digital, da Universidade Anhembi
          Morumbi, visando a atender às exigências da disciplina PROJETO
          INTERDISCIPLINAR: IOT. Trata-se de uma publicação temporária para
          propósitos estritamente acadêmicos e sem fins lucrativos. Em
          atendimento às exigências da Lei 9.610/98, do parágrafo 4°, do Artigo
          184, do Código Penal, os discentes responsáveis por esta publicação
          colocam-se à disposição, por intermédio do e-mail
          (666inter666@gmail.com), para dirimir quaisquer dúvidas referentes à
          eventual violação de direitos autorais, comprometendo-se desde já, a
          retirar do ar, qualquer texto, som ou imagem pertencente a autor ou
          titular que se sinta direta ou indiretamente prejudicado.
        </Text>
        <Button onPress={() => navigation.navigate('Home')} title="Voltar" />
      </Container>
    </>
  );
};

export default withNavigation(About);
