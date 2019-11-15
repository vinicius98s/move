function errorMessage(value, defaultMessage) {
  return !value.trim() ? 'Campo obrigatório' : defaultMessage;
}

function validateEmail(email) {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return {
    isValid,
    message: !isValid ? errorMessage(email, 'Email inválido') : '',
  };
}

function validatePassword(password) {
  const isValid = password.length > 3;

  return {
    isValid,
    message: !isValid ? errorMessage(password, 'Senha muito curta') : '',
  };
}

function validateName(name) {
  const isValid = name.length > 3;

  return {
    isValid,
    message: !isValid ? errorMessage(name, 'Nome inválido') : '',
  };
}

export function handleEmailValidation(email, setEmail, cb) {
  if (email.value) {
    if (cb && typeof cb === 'function') {
      cb();
    }

    const emailValidation = validateEmail(email.value);
    setEmail({
      ...email,
      isValid: emailValidation.isValid,
      message: emailValidation.message,
    });

    return emailValidation.isValid;
  }

  return false;
}

export function handlePasswordValidation(password, setPassword, cb) {
  if (password.value) {
    if (cb && typeof cb === 'function') {
      cb();
    }

    const passwordValidation = validatePassword(password.value);

    setPassword({
      ...password,
      isValid: passwordValidation.isValid,
      message: passwordValidation.message,
    });

    return passwordValidation.isValid;
  }

  return false;
}

export function handleNameValidation(name, setName, cb) {
  if (name.value) {
    if (cb && typeof cb === 'function') {
      cb();
    }

    const nameValidation = validateName(name.value);

    setName({
      ...name,
      isValid: nameValidation.isValid,
      message: nameValidation.message,
    });

    return nameValidation.isValid;
  }

  return false;
}
