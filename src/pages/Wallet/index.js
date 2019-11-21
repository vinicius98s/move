import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';

import {
  Container,
  Balance,
  BalanceInfo,
  BalanceText,
  BalanceValue,
  AddBalanceButton,
  AddBalanceText,
  TransactionWrapper,
  TransactionInfo,
  TransactionText,
  TransactionValue,
} from './styles';

import {handleApiRequest} from '../../services/api';
import Header from '../../components/PageHeader';
import Section from '../../components/Section';
import formatMoney from '../../utils/formatMoney';

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const [updatingBalance, setUpdatingBalance] = useState(false);
  const [balanceHistory, setBalanceHistory] = useState([]);

  const getBalanceHistory = async updateBalance => {
    if (updateBalance) {
      setUpdatingBalance(true);
    }

    try {
      const {data} = await handleApiRequest({
        method: 'get',
        endpoint: '/balance/history',
      });

      setBalance(data.balance);
      setBalanceHistory(data.balanceHistory);
    } catch (e) {
    } finally {
      if (updateBalance) {
        setUpdatingBalance(false);
      }
    }
  };

  useEffect(() => {
    getBalanceHistory();
  }, []);

  const formatDate = timestamp => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Header title="Carteira" />
      <Container
        refreshControl={
          <RefreshControl
            refreshing={updatingBalance}
            onRefresh={() => getBalanceHistory(true)}
          />
        }>
        <Balance>
          <BalanceInfo>
            <BalanceText>Saldo:</BalanceText>
            <BalanceValue>{formatMoney(balance)}</BalanceValue>
          </BalanceInfo>
          <AddBalanceButton>
            <AddBalanceText>Adicionar</AddBalanceText>
          </AddBalanceButton>
        </Balance>
        <Section title="Transações recentes:" noBorderBottom>
          {balanceHistory.length ? (
            balanceHistory.map(({date, paymentType, value}, index) => (
              <TransactionWrapper key={String(date)} borderTop={index === 0}>
                <TransactionInfo>
                  <TransactionText>
                    {paymentType ? 'Compra' : 'Corrida'}
                  </TransactionText>
                  <TransactionValue>{formatMoney(value)}</TransactionValue>
                </TransactionInfo>
                <TransactionInfo alignment="flex-end">
                  <TransactionText>{formatDate(date)}</TransactionText>
                  <TransactionText>{paymentType}</TransactionText>
                </TransactionInfo>
              </TransactionWrapper>
            ))
          ) : (
            <TransactionText>Nenhuma transação</TransactionText>
          )}
        </Section>
      </Container>
    </>
  );
}
