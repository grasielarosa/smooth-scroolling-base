/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { MenuItem as Props } from 'types';

import { MenuItem } from './style';

const NavItem: FC<Props> = ({ id, title }) => {
  return <MenuItem href={`#${id}`}>{title}</MenuItem>;
};

export { NavItem };
