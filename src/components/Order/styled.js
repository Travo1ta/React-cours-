import styled from 'styled-components';
import { theme } from '../../theme';
import Button from '../Button/Button';

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const OrderLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.textColorMuted};
  width: 100%;
`;

export const OrderInput = styled.input`
  padding: 12px 16px;
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${theme.textColorMuted};
    opacity: 0.5;
  }
`;

export const OrderButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 20px;
    background: ${theme.gradients.primary};
    color: white;
    font-size: 18px;
    padding: 14px;

    &:hover {
      background: ${theme.gradients.primaryHover};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;