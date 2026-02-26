import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './mocks/products';
import Catalog from './components/Catalog/Catalog';
import ProductOr404 from './components/ProductOr404/ProductOr404';
import NotFound from './components/NotFound/NotFound';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {/* Главная страница - каталог */}
            <Route path="/">
               {/* index = путь "/" */}
               <Route index element={<Catalog products={products} />} />

               {/* Вложенный маршрут для товаров */}
               <Route path="product">
                  {/* :code - динамический параметр (артикул) */}
                  <Route
                     path=":code"
                     element={<ProductOr404 products={products} />}
                  />
               </Route>

               {/* 404 для всех остальных путей */}
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;