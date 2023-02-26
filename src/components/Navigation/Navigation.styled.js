import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
