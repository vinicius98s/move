import React, {useState} from 'react';
import {withTheme} from 'styled-components';
import PropTypes from 'prop-types';

import {InputWrapper, TextInput, InputIcon} from './styles';

function Input({theme, icon, onFocus, onBlur, ...props}) {
  const [isActive, setIsActive] = useState(false);
  const {orange, darkBlue} = theme.colors;

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
    </InputWrapper>
  );
}

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  theme: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default withTheme(Input);
