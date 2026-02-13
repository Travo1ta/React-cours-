import styled from 'styled-components';
import { theme } from '../../theme';
import Button from '../Button/Button';

export const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PopUpContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: ${theme.shadow};
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const PopUpHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${theme.borderColor};
`;

export const PopUpTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: ${theme.textColor};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  color: ${theme.textColorMuted};
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: ${theme.background};
    color: ${theme.textColor};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const PopUpContent = styled.div`
  padding: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.textColorMuted};
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;

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

export const SubmitButton = styled(Button)`
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