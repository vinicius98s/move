import React, {useState} from 'react';
import {withTheme} from 'styled-components';
import PropTypes from 'prop-types';

import {InputWrapper, TextInput, InputIcon} from './styles';

function Input({placeholder, theme, icon, ...props}) {
  const [value, setValue] = useState('');

  return (
    <InputWrapper>
      <InputIcon
        name={icon}
        fill={theme.colors.orange}
        width="24"
        height="24"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        {...props}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default withTheme(Input);
