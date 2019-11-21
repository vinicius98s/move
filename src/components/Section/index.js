import React from 'react';

import {SectionWrapper, SectionTitle} from './styles';

export default function Section({title, children, noBorderBottom, borderTop}) {
  return (
    <SectionWrapper noBorderBottom={noBorderBottom} borderTop={borderTop}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}
