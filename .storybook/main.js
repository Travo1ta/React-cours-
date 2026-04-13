// .storybook/main.js
import { join, dirname } from 'node:path';

/**
 * Функция для получения правильных путей к аддонам
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Где искать истории (stories)
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.mdx',
  ],
  
  // Подключаемые аддоны (расширения)
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'), // Для проверки доступности
    getAbsolutePath('@storybook/addon-links'),
  ],
  
  // Фреймворк - React с Vite
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  
  // Документация
  docs: {
    autodocs: 'tag',
  },
  
  // Настройка Vite внутри Storybook
  async viteFinal(config, { configType }) {
    // Обеспечиваем наличие объекта resolve
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    
    // Если в будущем понадобятся алиасы, их можно добавить здесь:
    // config.resolve.alias['@'] = join(__dirname, '../src');
    // config.resolve.alias['@components'] = join(__dirname, '../src/components');
    // config.resolve.alias['@utils'] = join(__dirname, '../src/utils');
    // config.resolve.alias['/src'] = join(__dirname, '../src');
    
    return config;
  },
};

export default config;