import { PopularityBadge } from './styled';

const Popularity = ({ count }) => {
  if (count > 5) {
    return (
      <PopularityBadge $commentsCount={count}>
        <span>✅</span> Проверенный товар
      </PopularityBadge>
    );
  }

  if (count === 0) {
    return (
      <PopularityBadge $commentsCount={count}>
        <span>💬</span> Будь первым. Поделись впечатлениями
      </PopularityBadge>
    );
  }

  return null;
};

export default Popularity;