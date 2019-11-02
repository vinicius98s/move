import React, {useState} from 'react';
import {withTheme} from 'styled-components';
import PropTypes from 'prop-types';

import {InputWrapper, TextInput, InputIcon} from './styles';

function Input({theme, icon, ...props}) {
  const [isActive, setIsActive] = useState(false);
  const {orange, darkBlue} = theme.colors;

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
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default withTheme(Input);
