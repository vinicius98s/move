import React from 'react';

import {
  Container,
  Balance,
  BalanceInfo,
  BalanceText,
  BalanceValue,
  AddBalanceButton,
  AddBalanceText,
} from './styles';

import Header from '../../components/PageHeader';
import Section from '../../components/Section';

export default function Wallet() {
  return (
    <Container>
      <Header title="Carteira" />
      <Balance>
        <BalanceInfo>
          <BalanceText>Saldo:</BalanceText>
          <BalanceValue>R$ 150,00</BalanceValue>
        </BalanceInfo>
        <AddBalanceButton>
          <AddBalanceText>Adicionar</AddBalanceText>
        </AddBalanceButton>
      </Balance>
      <Section title="Transações recentes:" />
    </Container>
  );
}
