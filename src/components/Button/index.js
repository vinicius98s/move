import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {ButtonWrapper, ButtonTitle} from './styles';

export default function Button({onPress, variant, title, loading}) {
  const secondary = variant === 'secondary';

  const handleOnPress = () => {
    if (!loading) {
      onPress();
    }
  };

  return (
    <ButtonWrapper onPress={handleOnPress} secondary={secondary}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ButtonTitle secondary={secondary}>{title}</ButtonTitle>
      )}
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
