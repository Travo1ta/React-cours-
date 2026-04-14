// src/stories/Button.stories.jsx
import React from "react";
import { StyledButton } from "../components/Button/styled";

export default {
   title: 'Components/Button',
   component: StyledButton,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      children: {
         control: 'text',
         description: 'Текст на кнопке',
      },
      $size: {
         control: 'select',
         options: ['small', 'medium', 'large'],
         description: 'Размер кнопки',
         table: {
            defaultValue: { summary: 'medium' },
         },
      },
      disabled: {
         control: 'boolean',
         description: 'Отключённое состояние',
      },
      onClick: {
         action: 'clicked',
         description: 'Событие при клике',
      },
      type: {
         control: 'select',
         options: ['button', 'submit', 'reset'],
         description: 'Тип кнопки',
      },
   },
};

// Шаблон для создания историй
const Template = (args) => <StyledButton {...args} />;

// ============= Варианты кнопок =============

// 1. Основная кнопка (medium, по умолчанию)
export const Primary = Template.bind({});
Primary.args = {
   children: 'Купить',
   $size: 'medium',
   disabled: false,
};
Primary.parameters = {
   docs: {
      description: {
         story: 'Основная кнопка среднего размера. Используется для главных действий.',
      },
   },
};

// 2. Маленькая кнопка
export const Small = Template.bind({});
Small.args = {
   children: 'Подробнее',
   $size: 'small',
   disabled: false,
};
Small.parameters = {
   docs: {
      description: {
         story: 'Маленькая кнопка. Используется в карточках товаров, в таблицах, там где мало места.',
      },
   },
};

// 3. Большая кнопка
export const Large = Template.bind({});
Large.args = {
   children: 'Оформить заказ',
   $size: 'large',
   disabled: false,
};
Large.parameters = {
   docs: {
      description: {
         story: 'Большая кнопка. Используется для главных призывов к действию на странице.',
      },
   },
};

// 4. Отключённая кнопка
export const Disabled = Template.bind({});
Disabled.args = {
   children: 'Нет в наличии',
   $size: 'medium',
   disabled: true,
};
Disabled.parameters = {
   docs: {
      description: {
         story: 'Отключённая кнопка. Показывается, когда действие недоступно.',
      },
   },
};

// 5. Кнопка с длинным текстом
export const LongText = Template.bind({});
LongText.args = {
   children: 'Нажмите чтобы добавить товар в корзину',
   $size: 'medium',
   disabled: false,
};
LongText.parameters = {
   docs: {
      description: {
         story: 'Кнопка с длинным текстом. Проверяет, как компонент ведёт себя с большим объёмом текста.',
      },
   },
};

// 6. Кнопка с эмодзи
export const WithEmoji = Template.bind({});
WithEmoji.args = {
   children: '🛒 Добавить в корзину',
   $size: 'medium',
   disabled: false,
};
WithEmoji.parameters = {
   docs: {
      description: {
         story: 'Кнопка с эмодзи. Показывает, что можно использовать иконки и символы.',
      },
   },
};

// 7. Все размеры в ряд (для сравнения)
export const AllSizes = () => (
   <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <StyledButton $size="small">Маленькая</StyledButton>
      <StyledButton $size="medium">Средняя</StyledButton>
      <StyledButton $size="large">Большая</StyledButton>
   </div>
);
AllSizes.parameters = {
   docs: {
      description: {
         story: 'Все размеры кнопок в сравнении: small, medium, large.',
      },
   },
};

// 8. Состояния кнопки (хотя бы наглядное сравнение)
export const ButtonStates = () => (
   <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <StyledButton $size="medium">Обычная</StyledButton>
      <StyledButton $size="medium" disabled>Отключённая</StyledButton>
   </div>
);
ButtonStates.parameters = {
   docs: {
      description: {
         story: 'Сравнение обычного и отключённого состояний кнопки.',
      },
   },
};

// 9. Кнопка с кастомным стилем (через обёртку)
export const WithCustomWrapper = () => (
   <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px',
      borderRadius: '16px',
      textAlign: 'center'
   }}>
      <StyledButton $size="large">
         Кнопка на градиентном фоне
      </StyledButton>
   </div>
);
WithCustomWrapper.parameters = {
   docs: {
      description: {
         story: 'Кнопка на кастомном фоне. Проверяет контрастность и отображение.',
      },
   },
};

// 10. Интерактивный пример (с логом кликов)
export const Interactive = Template.bind({});
Interactive.args = {
   children: 'Нажми на меня',
   $size: 'large',
};
Interactive.parameters = {
   docs: {
      description: {
         story: 'Интерактивная кнопка. Клики отображаются в панели Actions.',
      },
   },
};

// 11. кнопка с иконкой 
export const WithIcon = Template.bind({});
WithIcon.args = {
   children: '⭐ Избранное',
   $size: 'medium',
};