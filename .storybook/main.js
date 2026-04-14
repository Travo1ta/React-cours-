// .storybook/main.js

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
   stories: [
      '../src/**/*.stories.@(js|jsx|ts|tsx)',  // Ищет любые .stories файлы
      '../src/**/*.mdx',
   ],
   addons: [
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/addon-links',
      '@storybook/addon-a11y',
   ],
   framework: {
      name: '@storybook/react-vite',
      options: {},
   },
   docs: {
      autodocs: 'tag',
   },
};

export default config;