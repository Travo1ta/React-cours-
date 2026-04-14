// src/stories/Description.stories.jsx
import React, { useState } from "react";
import Description from "../components/Description/description";
import { products } from "../mocks/products";

export default {
   title: 'Components/Description',
   component: Description,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      text: {
         control: 'text',
         description: 'Текст описания',
      },
      hasMoreText: {
         control: 'boolean',
         description: 'Показывать ли кнопку "Подробнее"',
      },
      isShowAllDescription: {
         control: 'boolean',
         description: 'Показан ли полный текст',
      },
      onShowMore: {
         action: 'showMore clicked',
         description: 'Колбэк при клике на кнопку',
      },
   },
};

// Шаблон для обычного использования
const Template = (args) => <Description {...args} />;

// Шаблон с интерактивным состоянием (для демонстрации работы кнопки)
const InteractiveTemplate = (args) => {
   const [isShowAll, setIsShowAll] = useState(args.isShowAllDescription || false);

   // Длинный текст для демонстрации
   const longText = args.text || products[0].description;

   // Обрезанный текст (первые 150 символов)
   const shortText = longText.slice(0, 150) + '...';

   return (
      <div style={{ maxWidth: '500px' }}>
         <Description
            text={isShowAll ? longText : shortText}
            hasMoreText={args.hasMoreText}
            isShowAllDescription={isShowAll}
            onShowMore={() => setIsShowAll(!isShowAll)}
         />
      </div>
   );
};

// ============= Варианты историй =============

// 1. Короткое описание (без кнопки)
export const ShortDescription = Template.bind({});
ShortDescription.args = {
   text: 'Это короткое описание товара. Здесь нет кнопки "Подробнее", потому что текст и так полностью виден.',
   hasMoreText: false,
   isShowAllDescription: true,
};

// 2. Длинное описание (с кнопкой "Подробнее") - неинтерактивный режим
export const LongDescriptionStatic = Template.bind({});
LongDescriptionStatic.args = {
   text: products[0].description.slice(0, 150) + '...',
   hasMoreText: true,
   isShowAllDescription: false,
};

// 3. Длинное описание (полный текст)
export const FullDescriptionStatic = Template.bind({});
FullDescriptionStatic.args = {
   text: products[0].description,
   hasMoreText: true,
   isShowAllDescription: true,
};

// 4. ИНТЕРАКТИВНЫЙ вариант (работает кнопка "Подробнее/Скрыть")
export const InteractiveDescription = InteractiveTemplate.bind({});
InteractiveDescription.args = {
   text: products[0].description,
   hasMoreText: true,
   isShowAllDescription: false,
};
InteractiveDescription.parameters = {
   docs: {
      description: {
         story: 'Нажмите на кнопку "Подробнее", чтобы увидеть полный текст. Кнопка "Скрыть" сворачивает текст обратно.',
      },
   },
};

// 5. Описание второго продукта (Эйфелева башня)
export const EiffelTowerDescription = InteractiveTemplate.bind({});
EiffelTowerDescription.args = {
   text: products[1].description,
   hasMoreText: true,
   isShowAllDescription: false,
};

// 6. Описание третьего продукта (Шахматы)
export const ChessDescription = InteractiveTemplate.bind({});
ChessDescription.args = {
   text: products[2].description,
   hasMoreText: true,
   isShowAllDescription: false,
};

// 7. Очень длинное описание (проверка переносов)
export const VeryLongDescription = InteractiveTemplate.bind({});
VeryLongDescription.args = {
   text: 'Это очень длинное описание, которое должно проверять, как компонент ведёт себя с большим объёмом текста. ' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   hasMoreText: true,
   isShowAllDescription: false,
};

// 8. Пустое описание
export const EmptyDescription = Template.bind({});
EmptyDescription.args = {
   text: '',
   hasMoreText: false,
   isShowAllDescription: true,
};

// 9. Кастомный стиль через обёртку
export const WithCustomStyle = () => (
   <div style={{
      background: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd'
   }}>
      <Description
         text={products[0].description.slice(0, 200) + '...'}
         hasMoreText={true}
         isShowAllDescription={false}
      />
   </div>
);