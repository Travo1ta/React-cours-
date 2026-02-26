import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './mocks/products';
import Catalog from './components/Catalog/Catalog';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {/* Главная страница - каталог товаров */}
            <Route
               path="/"
               element={<Catalog products={products} />}
            />

            {/* Страница конкретного товара */}
            <Route
               path="/product/:id"
               element={<ProductPage product={products[0]} showInfoInAccordion={true} />}
            />

            {/* Страница 404 */}
            <Route
               path="*"
               element={<div>Страница не найдена</div>}
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;