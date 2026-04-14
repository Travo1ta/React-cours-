// src/stories/Example.stories.jsx

// Простой компонент прямо внутри файла
const WelcomeComponent = () => (
   <div style={{
      textAlign: 'center',
      padding: '40px',
      fontFamily: 'sans-serif'
   }}>
      <h1 style={{ color: '#1ea7fd' }}>🎉 Storybook работает!</h1>
      <p>Поздравляю! Вы успешно настроили Storybook.</p>
      <p>Теперь можно создавать компоненты и истории.</p>
   </div>
);

export default {
   title: 'Example/Welcome',
   component: WelcomeComponent,
   parameters: {
      layout: 'centered',
   },
};

// История по умолчанию
export const Welcome = {};

// Дополнительная история с другим заголовком
export const WithCustomTitle = {
   render: () => (
      <div style={{ textAlign: 'center', padding: '40px' }}>
         <h2>Мой первый компонент в Storybook</h2>
         <button style={{
            background: '#1ea7fd',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
         }}>
            Нажми меня
         </button>
      </div>
   ),
};