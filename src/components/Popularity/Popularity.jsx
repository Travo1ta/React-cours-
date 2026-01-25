import styled from 'styled-components';
import { P } from '../../elements';

const PopularityBadge = styled(P)`
  background-color: ${({ commentsCount }) => 
    commentsCount > 5 ? '#e8f5e9' : '#fff3e0'};
  color: ${({ commentsCount }) => 
    commentsCount > 5 ? '#2e7d32' : '#f57c00'};
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ commentsCount }) => 
    commentsCount > 5 ? '#c8e6c9' : '#ffe0b2'};
`;

const Popularity = ({ commentsCount }) => {
  if (commentsCount > 5) {
    return (
      <PopularityBadge commentsCount={commentsCount}>
        <span>✅</span> Проверенный товар
      </PopularityBadge>
    );
  }

  if (commentsCount === 0) {
    return (
      <PopularityBadge commentsCount={commentsCount}>
        <span>💬</span> Будь первым. Поделись впечатлениями
      </PopularityBadge>
    );
  }

  return null;
};

export default Popularity;