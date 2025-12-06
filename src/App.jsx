import React from 'react'
import './App.css'
import ProductPage from './components/ProductPage'

function App() {
  // Для тестирования разных случаев раскомментируйте нужный вариант:

  // Вариант 1: Больше 5 комментариев (Проверенный товар)
  const product = {
    title: "3D принтер",
    article: "2840367",
    oldPrice: 55555,
    price: 33333,
    imageUrl: "https://i.ibb.co/gPCq1G4/image.png",
    comments: [
      { id: 1, author: "Кирилл", text: "Отличный принтер!" },
      { id: 2, author: "Мария", text: "Работает без нареканий" },
      { id: 3, author: "Алексей", text: "Доставка быстрая" },
      { id: 4, author: "Ольга", text: "Качество печати хорошее" },
      { id: 5, author: "Дмитрий", text: "Рекомендую" },
      { id: 6, author: "Анна", text: "Лучшая покупка" } // 6 комментариев > 5
    ],
    description: "Описание товара...",
    delivery: "1 апреля"
  };

  // Вариант 2: Нет комментариев (Будь первым)
  /*
  const product = {
    title: "3D принтер",
    article: "2840367",
    oldPrice: 55555,
    price: 33333,
    imageUrl: "https://i.ibb.co/gPCq1G4/image.png",
    comments: [], // 0 комментариев
    description: "Описание товара...",
    delivery: "1 апреля"
  };
  */

  // Вариант 3: От 1 до 5 комментариев (нет плашки)
  /*
  const product = {
    title: "3D принтер",
    article: "2840367",
    oldPrice: 55555,
    price: 33333,
    imageUrl: "https://i.ibb.co/gPCq1G4/image.png",
    comments: [
      { id: 1, author: "Кирилл", text: "Отличный принтер!" },
      { id: 2, author: "Мария", text: "Работает без нареканий" }
    ], // 2 комментария
    description: "Описание товара...",
    delivery: "1 апреля"
  };
  */

  return (
    <div className="app">
      <ProductPage product={product} />
    </div>
  )
}

export default App