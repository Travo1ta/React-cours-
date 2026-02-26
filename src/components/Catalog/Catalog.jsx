import React from 'react';
import FullPrice from '../FullPrice/FullPrice';
import {
   CatalogContainer,
   CatalogTitle,
   ProductsGrid,
   ProductCard,
   ProductLink, // ✅ Стилизованный Link
   ProductImage,
   ProductTitle,
   ProductPrice
} from './styled';

const Catalog = ({ products }) => {
   if (!products?.length) {
      return <CatalogContainer>Товары отсутствуют</CatalogContainer>;
   }

   return (
      <CatalogContainer>
         <CatalogTitle as="h1">Каталог товаров</CatalogTitle>

         <ProductsGrid>
            {products.map((product) => (
               <ProductCard key={product.article || product.id}>
                  {/* ✅ Оборачиваем всю карточку в Link */}
                  <ProductLink to={`/product/${product.article}`}>
                     <ProductImage
                        src={product.images?.[0] || '/placeholder.jpg'}
                        alt={product.title}
                     />
                     <ProductTitle>{product.title}</ProductTitle>
                     <ProductPrice>
                        <FullPrice
                           oldPrice={product.oldPrice}
                           price={product.price}
                        />
                     </ProductPrice>
                  </ProductLink>
               </ProductCard>
            ))}
         </ProductsGrid>
      </CatalogContainer>
   );
};

export default Catalog;