import styled from 'styled-components';
import { theme } from '../../theme';
import { Title } from '../Title/styled';

export const CatalogContainer = styled.section`
  padding: ${theme.indentLarge};
  max-width: 1200px;
  margin: 0 auto;
`;

export const CatalogTitle = styled(Title)`
  text-align: center;
  margin-bottom: ${theme.indentLarge};
  font-size: 32px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.indentLarge};
  justify-content: center;
`;

export const ProductCard = styled.article`
  background: ${theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${theme.shadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${theme.borderColor};
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.textColor};
  margin: ${theme.indent} ${theme.indent} 0;
  line-height: 1.4;
`;

export const ProductPrice = styled.div`
  margin: ${theme.indentSmall} ${theme.indent} ${theme.indent};
`;