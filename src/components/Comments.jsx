import React from 'react';
import Popularity from './Popularity';

const Comments = ({ comments = [] }) => {
  const commentsCount = comments.length;
  
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Отзывы ({commentsCount})</h3>
      
      {/* Плашка популярности */}
      <Popularity commentsCount={commentsCount} />
      
      {/* Список комментариев с авторами */}
      {commentsCount > 0 && (
        <ul style={{ 
          listStyle: "none", 
          padding: 0,
          margin: 0
        }}>
          {comments.map(comment => (
            <li key={comment.id} style={{
              borderBottom: "1px solid #eee",
              padding: "15px 0",
              marginBottom: "10px"
            }}>
              <div style={{
                fontWeight: "bold",
                marginBottom: "5px",
                color: "#333"
              }}>
                {comment.author}
              </div>
              <div style={{
                color: "#666",
                lineHeight: "1.5"
              }}>
                {comment.text}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;