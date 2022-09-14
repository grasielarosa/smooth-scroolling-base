/* eslint-disable import/no-unresolved */
import React from 'react';

import { Header, Section } from 'components';
import { Main } from './styles';

const MainsScreen = () => {
  return (
    <Main>
      <Header />
      <Section id="photo" color="tomato">
        Photo
      </Section>
      <Section id="video" color="salmon">
        Vídeo
      </Section>
      <Section id="graphic-design" color="tomato">
        Graphic Design
      </Section>
      <Section id="contact" color="tomato">
        Contact
      </Section>
    </Main>
  );
};

export { MainsScreen };
