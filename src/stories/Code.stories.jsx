// src/stories/Code.stories.jsx
import React from "react";
import { Code } from "../components/Code/styled";

export default {
   title: 'Components/Code',
   component: Code,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      children: {
         control: 'text',
         description: 'Артикул товара',
      },
      theme: {
         control: 'object',
         description: 'Тема для стилизации (опционально)',
      },
   },
};

// Шаблон
const Template = (args) => <Code {...args} />;

// Основной вариант
export const DefaultCode = Template.bind({});
DefaultCode.args = {
   children: '2840367',  // Артикул из products
};

// Другой артикул
export const AnotherCode = Template.bind({});
AnotherCode.args = {
   children: '2840777',
};

// Длинный артикул
export const LongCode = Template.bind({});
LongCode.args = {
   children: '1234567890123',
};

// Без артикула (пустой)
export const EmptyCode = Template.bind({});
EmptyCode.args = {
   children: '',
};

// С пользовательским цветом через тему
export const CustomColorCode = Template.bind({});
CustomColorCode.args = {
   children: '2840367',
};
CustomColorCode.parameters = {
   themes: {
      theme: {
         textColorMuted: '#ff6600',  // Оранжевый цвет
      }
   }
};