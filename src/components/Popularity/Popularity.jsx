import { PopularityBadge } from './styled';

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