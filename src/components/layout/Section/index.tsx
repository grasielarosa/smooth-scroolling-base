import React, { FC, ReactNode } from 'react';

import { SectionContainer } from './styles';

type Props = {
  id: string;
  children: ReactNode;
  color: string;
};

const Section: FC<Props> = ({ children, id, color }) => {
  return (
    <SectionContainer
      id={id}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {children}
    </SectionContainer>
  );
};

export { Section };
