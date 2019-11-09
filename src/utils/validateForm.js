function errorMessage(value, defaultMessage) {
  return !value.trim() ? 'Campo obrigatório' : defaultMessage;
}

export function validateEmail(email) {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return {
    isValid,
    message: !isValid ? errorMessage(email, 'Email inválido') : '',
  };
}

export function validatePassword(password) {
  const isValid = password.length > 3;

  return {
    isValid,
    message: !isValid ? errorMessage(password, 'Senha muito curta') : '',
  };
}
