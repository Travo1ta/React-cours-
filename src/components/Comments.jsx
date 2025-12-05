import React from 'react';

const Comments = ({ comments = [] }) => {
  const commentsCount = comments.length;
  
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Отзывы ({commentsCount})</h3>
      
      {/* Блок проверенного товара */}
      {commentsCount > 5 && (
        <div style={{
          backgroundColor: "#e8f5e9",
          color: "#2e7d32",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "15px"
        }}>
          ✅ Проверенный товар
        </div>
      )}
      
      {/* Блок "будь первым" */}
      {commentsCount === 0 && (
        <div style={{
          fontWeight: "bold",
          marginBottom: "15px"
        }}>
          Будь первым. Поделись впечатлениями
        </div>
      )}
      
      {/* Список комментариев */}
      {commentsCount > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {comments.map(comment => (
            <li key={comment.id} style={{
              borderBottom: "1px solid #eee",
              padding: "10px 0",
              marginBottom: "5px"
            }}>
              {comment.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;