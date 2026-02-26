import React from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage';
import NotFound from '../NotFound/NotFound'; // Создадим позже, пока просто div

const ProductOr404 = ({ products }) => {
   // Получаем code из URL (артикул товара)
   const { code } = useParams();

   // Ищем товар по артикулу (преобразуем в строку для безопасного сравнения)
   const product = products.find(
      (product) => product.article?.toString() === code
   );

   // Если товар найден - показываем ProductPage
   if (product) {
      return <ProductPage product={product} showInfoInAccordion={true} />;
   }

   // Если товар не найден - показываем 404
   return <NotFound />;
};

export default ProductOr404;