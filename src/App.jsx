import React, { useState } from 'react';
import ProductPage from './components/ProductPage/ProductPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyles';
import { products } from './mocks/products'; // Импортируем массив продуктов

function App() {
   // Состояние для выбранного продукта (по умолчанию первый)
   const [selectedProductId, setSelectedProductId] = useState(1);

   // Находим выбранный продукт по id
   const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />

         {/* Простая навигация для переключения между продуктами */}
         <div style={{ padding: '20px', textAlign: 'center' }}>
            {products.map(product => (
               <button
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  style={{
                     margin: '0 10px',
                     padding: '10px 20px',
                     background: selectedProductId === product.id ? theme.primary : '#eee',
                     color: selectedProductId === product.id ? 'white' : '#333',
                     border: 'none',
                     borderRadius: '4px',
                     cursor: 'pointer'
                  }}
               >
                  {product.title}
               </button>
            ))}
         </div>

         {/* Передаём выбранный продукт в ProductPage */}
         <ProductPage
            product={selectedProduct}
            showInfoInAccordion={false}
         />
      </ThemeProvider>
   );
}

export default App;