/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // Проверки доступности включены с блокировкой ошибок
      test: "error"
    }
  },
};

export default preview;