import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './mocks/products';
import Layout from './components/Layout/Layout';
import Catalog from './components/Catalog/Catalog';
import NotFound from './components/NotFound/NotFound';
import ProductOr404 from './components/ProductOr404/ProductOr404';


function App() {
   return (
      <BrowserRouter>
         <Routes>
            {/* Layout оборачивает все дочерние маршруты */}
            <Route path="/" element={<Layout />}>
               {/* Главная страница - каталог */}
               <Route index element={<Catalog products={products} />} />

               {/* Страницы товаров */}
               <Route path="product">
                  <Route
                     path=":code"
                     element={<ProductOr404 products={products} />}
                  />
               </Route>

               {/* О нас (для примера) */}
               <Route
                  path="about"
                  element={<div>Страница о нас</div>}
               />
            </Route>

            {/* 404 для всех остальных путей */}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;