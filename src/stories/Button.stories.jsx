// src/stories/Button.stories.jsx

// Простой компонент кнопки
const Button = ({ label, primary, onClick }) => {
   const style = {
      backgroundColor: primary ? '#1ea7fd' : '#ccc',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '5px',
   };

   return <button style={style} onClick={onClick}>{label}</button>;
};

export default {
   title: 'Components/Button',
   component: Button,
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      label: { control: 'text' },
      primary: { control: 'boolean' },
      onClick: { action: 'clicked' },
   },
};

// Разные варианты кнопки
export const Primary = {
   args: {
      label: 'Primary Button',
      primary: true,
   },
};

export const Secondary = {
   args: {
      label: 'Secondary Button',
      primary: false,
   },
};

export const WithLongText = {
   args: {
      label: 'Кнопка с очень длинным текстом',
      primary: true,
   },
};