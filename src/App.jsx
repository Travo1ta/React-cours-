import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { products } from './mocks/products';
import { mainPageData } from './mocks/mainPageData';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import ProductPage from './components/ProductPage/ProductPage';
import NotFound from './components/NotFound/NotFound';

// Компонент для поиска товара по артикулу
const ProductOr404 = ({ products }) => {
   // Получаем параметр article из URL
   const { article } = useParams();

   console.log('Ищем товар с артикулом:', article);
   console.log('Доступные артикулы:', products.map(p => p.article));

   // Ищем товар по полю article
   const product = products.find(
      (product) => product.article === article
   );

   if (product) {
      console.log('Товар найден:', product.title);
      return <ProductPage product={product} showInfoInAccordion={true} />;
   }

   console.log('Товар не найден, показываем 404');
   return <NotFound />;
};

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               {/* Главная страница */}
               <Route index element={<MainPage data={mainPageData} />} />

               {/* Каталог */}
               <Route path="catalog">
                  <Route index element={<Catalog products={products} />} />
                  <Route path="product/:article" element={<ProductOr404 products={products} />} />
               </Route>

               {/* О нас (для примера) */}
               <Route path="about" element={<div>Страница о нас</div>} />
            </Route>

            {/* 404 для всех остальных путей */}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;