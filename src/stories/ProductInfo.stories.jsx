// src/stories/ProductInfo.stories.jsx
import React from "react";
import { Title } from "../components/Title/styled";
import { Code } from "../components/Code/styled";
import { products } from "../mocks/products";

export default {
   title: 'Components/ProductInfo',
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
};

// Шаблон для отображения информации о продукте
const Template = ({ product }) => (
   <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
      <Title>{product.title}</Title>
      <Code>{product.article}</Code>
   </div>
);

// Информация о первом продукте
export const Product3DPrinter = () => <Template product={products[0]} />;

// Информация о втором продукте
export const ProductEiffelTower = () => <Template product={products[1]} />;

// Информация о третьем продукте
export const ProductChess = () => <Template product={products[2]} />;

// Все продукты вместе
export const AllProducts = () => (
   <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {products.map((product) => (
         <div key={product.id} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px', width: '250px' }}>
            <Title>{product.title}</Title>
            <Code>{product.article}</Code>
         </div>
      ))}
   </div>
);