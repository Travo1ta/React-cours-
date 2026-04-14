// src/stories/Gallery.stories.jsx
import React from "react";
import Gallery from "../components/Gallery/Gallery";
import { products } from "../mocks/products";

export default {
   title: 'Components/Gallery',
   component: Gallery,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      images: { control: 'object' },
   },
}

// Шаблон для создания историй
const Template = (args) => <Gallery {...args} />;

// История с изображениями первого продукта (3D принтер)
export const ProductGallery = Template.bind({});
ProductGallery.args = {
   images: products[0].images,
};

// История с изображениями второго продукта (Эйфелева башня)
export const EiffelTowerGallery = Template.bind({});
EiffelTowerGallery.args = {
   images: products[1].images,
};

// История с изображениями третьего продукта (Шахматы)
export const ChessGallery = Template.bind({});
ChessGallery.args = {
   images: products[2].images,
};

// История с пользовательскими изображениями
export const CustomGallery = Template.bind({});
CustomGallery.args = {
   images: [
      'https://via.placeholder.com/600x400?text=Custom+Image+1',
      'https://via.placeholder.com/600x400?text=Custom+Image+2',
      'https://via.placeholder.com/600x400?text=Custom+Image+3',
   ],
};

// История с пустым массивом (для проверки)
export const EmptyGallery = Template.bind({});
EmptyGallery.args = {
   images: [],
};

// История только с одним изображением
export const SingleImageGallery = Template.bind({});
SingleImageGallery.args = {
   images: [products[0].images[0]],
};