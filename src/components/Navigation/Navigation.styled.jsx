import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #1976dc;
  font-family: system-ui, sans-serif;
  text-transform: uppercase;

  &:hover {
    color: #10007b;
  }
`;
