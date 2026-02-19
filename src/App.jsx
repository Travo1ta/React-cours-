import React from 'react';
import ProductPage from './components/ProductPage/ProductPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyles';

// Пример данных товара
const product = {
  title: "3D принтер",
  article: "2840367",
  price: 33333,
  oldPrice: 55555,
  images: [
    "https://i.ibb.co/gPCq1G4/image.png",
    "https://i.ibb.co/yFhYrms/hb2NiWc.jpg",
    "https://i.ibb.co/r6QCT38/NcXNhJb.jpg"
  ],
  description: "Это 'текст-рыба', часто используется в макетах для демонстрации того, как будет выглядеть текст. Здесь должно быть подробное описание 3D принтера, его характеристик, особенностей и преимуществ. " + 
    "Текст может быть очень длинным, чтобы проверить работу кнопки 'Подробнее' и аккордеона. " +
    "Добавим ещё несколько предложений, чтобы точно превысить лимит в 200 символов и убедиться, что кнопка появляется.",
  comments: [
    { id: 1, author: "Иван", text: "Отличный принтер!" },
    { id: 2, author: "Мария", text: "Доставка быстрая" },
    { id: 3, author: "Алексей", text: "Пользуюсь месяц, проблем нет" },
    { id: 4, author: "Елена", text: "Хорошее соотношение цены и качества" },
    { id: 5, author: "Дмитрий", text: "Ребята, всем советую!" }
  ],
  delivery: "1 апреля"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProductPage product={product} showInfoInAccordion={false} />
    </ThemeProvider>
  );
}

// ✅ ДОБАВЛЯЕМ ЭКСПОРТ
export default App;