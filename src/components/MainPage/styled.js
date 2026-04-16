import styled from 'styled-components';
import { theme } from '../../theme';
import { Title } from '../Title/styled';

export const MainContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.indentLarge};
  text-align: center;
  background: ${theme.background};
  min-height: 100vh;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 30px;
  font-size: 36px;
  color: ${theme.textColor}; /* тёмный шрифт #333 */
`;

export const StyledGallery = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

export const DescriptionWrapper = styled.section`
  margin: 30px auto 0;
  max-width: 600px;
  text-align: center;
`;

export const MainText = styled.div`
  text-align: left;
  line-height: 1.6;
  color: ${theme.textColor}; /* тёмный шрифт #333 */
`;