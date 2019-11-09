import React, {useState} from 'react';
import {withTheme} from 'styled-components';
import PropTypes from 'prop-types';

import {
  InputWrapper,
  TextInput,
  InputIcon,
  ErrorMessage,
  ErrorWrapper,
  ErrorIcon,
} from './styles';

function Input({
  theme,
  icon,
  onFocus,
  onBlur,
  validation = {isValid: true, message: ''},
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const {orange, darkBlue, red} = theme.colors;

  const handleOnFocus = () => {
    if (onFocus && typeof onFocus === 'function') {
      onFocus();
    }

    setIsActive(true);
  };

  const handleOnBlur = () => {
    if (onBlur && typeof onBlur === 'function') {
      onBlur();
    }

    setIsActive(false);
  };

  const renderErrorMessage = () => {
    if (!validation.isValid && validation.message.length) {
      return (
        <ErrorWrapper>
          <ErrorIcon name="close-outline" fill={red} width="16" height="16" />
          <ErrorMessage>{validation.message}</ErrorMessage>
        </ErrorWrapper>
      );
    }
  };

  return (
    <InputWrapper>
      <InputIcon
        name={icon}
        fill={isActive ? orange : darkBlue}
        width="24"
        height="24"
      />
      <TextInput
        {...props}
        hasValue={!!props.value}
        isActive={isActive}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {renderErrorMessage()}
    </InputWrapper>
  );
}

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  theme: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  validation: PropTypes.shape({
    isValid: PropTypes.bool,
    message: PropTypes.string,
  }),
};

export default withTheme(Input);
