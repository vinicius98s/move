import React from 'react';
import PropTypes from 'prop-types';

import {ButtonWrapper, ButtonTitle} from './styles';

export default function Button({onPress, variant, title}) {
  const secondary = variant === 'secondary';

  return (
    <ButtonWrapper onPress={onPress} secondary={secondary}>
      <ButtonTitle secondary={secondary}>{title}</ButtonTitle>
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

Button.propTypes = {
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  title: PropTypes.string.isRequired,
};
