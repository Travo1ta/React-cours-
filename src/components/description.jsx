import React from 'react';

const Description = ({ text }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Описание</h2>
      <p style={{ lineHeight: "1.6" }}>
        {text}
      </p>
      <button type="button">Подробнее</button>
    </div>
  );
};

export default Description;