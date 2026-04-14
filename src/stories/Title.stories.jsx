// src/stories/Title.stories.jsx
import React from "react";
import { Title } from "../components/Title/styled";

export default {
   title: 'Components/Title',
   component: Title,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      children: {
         control: 'text',
         description: 'Заголовок',
      },
      theme: {
         control: 'object',
         description: 'Тема для стилизации',
      },
   },
};

// Шаблон
const Template = (args) => <Title {...args} />;

// Основной заголовок
export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
   children: '3D принтер',
};

// Другой заголовок
export const AnotherTitle = Template.bind({});
AnotherTitle.args = {
   children: 'Эйфелева башня',
};

// Длинный заголовок
export const LongTitle = Template.bind({});
LongTitle.args = {
   children: 'Очень длинный заголовок, который может переноситься на несколько строк для проверки стилей',
};

// Короткий заголовок
export const ShortTitle = Template.bind({});
ShortTitle.args = {
   children: 'Шахматы',
};

// С пользовательским цветом через тему
export const CustomColorTitle = Template.bind({});
CustomColorTitle.args = {
   children: 'Кастомный цвет',
};
CustomColorTitle.parameters = {
   themes: {
      theme: {
         textColor: '#e74c3c',  // Красный цвет
      }
   }
};

// Заголовок с большим отступом (через декоратор)
export const WithMargin = Template.bind({});
WithMargin.args = {
   children: 'Заголовок с отступами',
};
WithMargin.decorators = [
   (Story) => (
      <div style={{ margin: '50px', background: '#f5f5f5', padding: '20px' }}>
         <Story />
      </div>
   ),
];