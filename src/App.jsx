import React from 'react'
import './App.css'
import ProductPage from './components/ProductPage'

function App() {
  const product = {
    title: "3D принтер",
    article: "2840367",
    oldPrice: 55555,
    price: 33333,
    imageUrl: "https://i.ibb.co/gPCq1G4/image.png",
    comments: [  // Пример массива комментариев
      { id: 1, text: "Отличный принтер!" },
      { id: 2, text: "Работает без нареканий" },
      { id: 3, text: "Доставка быстрая" },
      { id: 4, text: "Качество печати хорошее" },
      { id: 5, text: "Рекомендую" },
      { id: 6, text: "Лучшая покупка" }
    ],
    description: "это «текст-рыба», часто используемый в печати и веб-дизайне..."
  };

  return (
    <div className="app">
      <ProductPage product={product} />
    </div>
  )
}

export default App