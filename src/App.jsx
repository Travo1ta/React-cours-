import ProductPage from './components/ProductPage/ProductPage';

function App() {
  const product = {
    title: "3D принтер",
    article: "2840367",
    oldPrice: 55555,
    price: 33333,
    imageUrl: "https://i.ibb.co/gPCq1G4/image.png",
    comments: [
      { id: 1, author: "Кирилл", text: "Отличный принтер!" },
      { id: 2, author: "Мария", text: "Работает без нареканий" },
      { id: 3, author: "Алексей", text: "Доставка быстрая" },
      { id: 4, author: "Ольга", text: "Качество печати хорошее" },
      { id: 5, author: "Дмитрий", text: "Рекомендую" },
      { id: 6, author: "Анна", text: "Лучшая покупка" }
    ],
    description: "Современный 3D принтер с высокой точностью печати. Поддерживает различные материалы, включая PLA, ABS и PETG. Идеально подходит для прототипирования, хобби и образовательных целей. Автоматическая калибровка платформы и функция возобновления печати.",
    delivery: "1 апреля"
  };

  return <ProductPage product={product} />;
}

export default App;