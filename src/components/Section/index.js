import React from 'react';

import {SectionWrapper, SectionTitle} from './styles';

export default function Section({title, children}) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}
