import React from 'react';

const Popularity = ({ commentsCount }) => {
  // Если комментариев больше 5 - "Проверенный товар"
  // Если 0 комментариев - "Будь первым. Поделись впечатлениями"
  // В остальных случаях - ничего не показываем

  if (commentsCount > 5) {
    return (
      <div style={{
        backgroundColor: "#e8f5e9",
        color: "#2e7d32",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "15px",
        fontWeight: "bold"
      }}>
        ✅ Проверенный товар
      </div>
    );
  }

  if (commentsCount === 0) {
    return (
      <div style={{
        fontWeight: "bold",
        marginBottom: "15px",
        color: "#333"
      }}>
        Будь первым. Поделись впечатлениями
      </div>
    );
  }

  // Если комментариев от 1 до 5 - ничего не показываем
  return null;
};

export default Popularity;