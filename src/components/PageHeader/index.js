import React from 'react';

import {Container, Title, RightIconWrapper} from './styles';

export default function Header({title, rightIcon}) {
  const renderRightIcon = rightIcon && typeof rightIcon === 'function';

  return (
    <Container>
      <Title>{title}</Title>
      {!!renderRightIcon && <RightIconWrapper>{rightIcon()}</RightIconWrapper>}
    </Container>
  );
}
