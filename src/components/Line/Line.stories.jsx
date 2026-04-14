// src/components/Line/Line.stories.jsx
import React from "react";
import Line from "./Line";

export default {
   title: "Components/Line",
   component: Line,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      color: {
         control: 'color',
         description: 'Цвет линии',
      },
      thickness: {
         control: 'select',
         options: ['1px', '2px', '3px', '4px', '5px'],
         description: 'Толщина линии',
      },
      width: {
         control: 'text',
         description: 'Ширина линии (100%, 50%, 200px и т.д.)',
      },
      rounded: {
         control: 'boolean',
         description: 'Скруглённые края',
      },
      dashed: {
         control: 'boolean',
         description: 'Пунктирная линия',
      },
      dotted: {
         control: 'boolean',
         description: 'Точечная линия',
      },
      gradient: {
         control: 'boolean',
         description: 'Градиентная линия',
      },
   },
};

// Шаблон для создания историй
const Template = (args) => <Line {...args} />;

// ============= Варианты линий =============

// 1. Стандартная линия
export const Default = Template.bind({});
Default.args = {
   color: '#e0e0e0',
   thickness: '1px',
   width: '100%',
};
Default.parameters = {
   docs: {
      description: {
         story: 'Стандартная горизонтальная линия. Используется для разделения блоков.',
      },
   },
};

// 2. Толстая линия
export const Thick = Template.bind({});
Thick.args = {
   color: '#667eea',
   thickness: '4px',
   width: '100%',
   rounded: true,
};
Thick.parameters = {
   docs: {
      description: {
         story: 'Толстая линия с цветом акцента и скруглёнными краями.',
      },
   },
};

// 3. Узкая линия (50% ширины)
export const Narrow = Template.bind({});
Narrow.args = {
   color: '#ccc',
   thickness: '2px',
   width: '50%',
   rounded: true,
};

// 4. Пунктирная линия
export const Dashed = Template.bind({});
Dashed.args = {
   color: '#999',
   thickness: '2px',
   width: '100%',
   dashed: true,
};

// 5. Точечная линия
export const Dotted = Template.bind({});
Dotted.args = {
   color: '#999',
   thickness: '2px',
   width: '100%',
   dotted: true,
};

// 6. Градиентная линия
export const Gradient = Template.bind({});
Gradient.args = {
   color: '#667eea',
   thickness: '3px',
   width: '100%',
   gradient: true,
};

// 7. Цветная линия (через color picker)
export const Colored = Template.bind({});
Colored.args = {
   color: '#ff6b6b',
   thickness: '3px',
   width: '100%',
   rounded: true,
};

// 8. Тонкая линия (для разделения в тексте)
export const Thin = Template.bind({});
Thin.args = {
   color: '#eee',
   thickness: '1px',
   width: '100%',
};

// 9. Короткая линия (для подзаголовков)
export const Short = Template.bind({});
Short.args = {
   color: '#667eea',
   thickness: '3px',
   width: '60px',
   rounded: true,
};
Short.parameters = {
   docs: {
      description: {
         story: 'Короткая линия. Часто используется под заголовками.',
      },
   },
};

// 10. Все варианты в одном месте
export const AllVariants = () => (
   <div style={{ width: '400px' }}>
      <h4>Стандартная</h4>
      <Line />

      <h4>Толстая</h4>
      <Line thickness="4px" color="#667eea" rounded />

      <h4>Узкая (50%)</h4>
      <Line width="50%" />

      <h4>Пунктирная</h4>
      <Line dashed />

      <h4>Точечная</h4>
      <Line dotted />

      <h4>Градиентная</h4>
      <Line gradient thickness="3px" />

      <h4>Короткая (под заголовком)</h4>
      <Line width="60px" thickness="3px" color="#667eea" rounded />
   </div>
);
AllVariants.parameters = {
   docs: {
      description: {
         story: 'Все варианты линий в сравнении.',
      },
   },
};

// 11. Интерактивная линия (можно менять параметры в Controls)
export const Interactive = Template.bind({});
Interactive.args = {
   color: '#667eea',
   thickness: '2px',
   width: '100%',
   rounded: true,
};
Interactive.parameters = {
   docs: {
      description: {
         story: 'Интерактивная линия. Используйте панель Controls для изменения параметров.',
      },
   },
};