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
      { id: 6, author: "Анна", text: "Лучшая покупка" },
      { id: 7, author: "Илья", text: "Цену бы пониже" },
      { id: 8, author: "Дима", text: "А где покупать расходники?" }
    ],
    description: "это 'текст-рыба', часто исполняется в связи с заявлением о выборке, а также о приобретении данных. В этом случае это является стандартной 'рыбой' для того, чтобы не получить время нанесения данных. Если вы имеете право на перейти к данным, то если вы имеете право на перейти к данным, то нужно ли узнать, что произошло.",
    delivery: "1 апреля"
  };
 // если надо реализовать функцию показа через аккордион то вставляем showInfoInAccordion={true} иначе будет показан Таб
  return <ProductPage product={product} showInfoInAccordion={true} />;
}

export default App;