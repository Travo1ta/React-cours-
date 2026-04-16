import styled from 'styled-components';
import { theme } from '../../theme';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.background};
`;

export const Header = styled.header`
  background: ${theme.gradients.primary};
  padding: ${theme.indent} ${theme.indentLarge};
  box-shadow: ${theme.shadow};
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.indentLarge};
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 0;
    transition: opacity 0.2s;
    position: relative;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: white;
        border-radius: 2px;
      }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  background: ${theme.cardBackground};
  color: ${theme.textColorMuted};
  text-align: center;
  padding: ${theme.indent};
  margin-top: auto;
  border-top: 1px solid ${theme.borderColor};
`;