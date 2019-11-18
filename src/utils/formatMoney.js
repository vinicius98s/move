function formatMoney(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

export default formatMoney;
