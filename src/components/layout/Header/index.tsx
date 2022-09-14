/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { MenuItem } from 'types';

import { NavItem } from 'components';
import { HeaderContainer, Menu } from './styles';

const Header: FC = () => {
  const navigationSections: MenuItem[] = [
    { title: 'Photo', id: 'photo', path: '/photo' },
    { title: 'Video', id: 'video', path: '/video' },
    { title: 'Graphic Design', id: 'graphic-design', path: '/graphic-design' },
    { title: 'Contact', id: 'contact', path: '/contact' },
  ];

  return (
    <HeaderContainer>
      <div style={{ width: '20vw' }}>logo</div>
      <Menu>
        {navigationSections.map((item) => (
          <NavItem
            id={item.id}
            title={item.title}
            key={item.id}
            path={item.path}
          />
        ))}
      </Menu>
    </HeaderContainer>
  );
};

export { Header };
