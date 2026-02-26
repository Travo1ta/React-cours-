import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './mocks/products';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {/* Главная страница - первый продукт */}
            <Route
               path="/"
               element={
                  <ProductPage
                     product={products[0]}
                     showInfoInAccordion={true}
                  />
               }
            />

            {/* Страница продукта по ID (для будущего расширения) */}
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