module.exports = {
  async up(db, client) {
    await db.collection('pizzas').insertMany([
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 5,
        category: 0,
        rating: 4,
        ingredients: ['Томатный соус', 'пикантная пепперони', 'моцарелла'],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
        name: 'Сырная',
        types: [0],
        sizes: [26, 40],
        price: 7,
        category: 1,
        rating: 6,
        ingredients: ['Моцарелла', 'сыры чеддер и пармезан', 'альфредо'],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
        name: 'Цыпленок барбекю',
        types: [0],
        sizes: [26, 40],
        price: 18,
        category: 1,
        rating: 4,
        ingredients: [
          'Соус барбекю',
          'томатный соус',
          'цыпленок',
          'красный лук',
          'моцарелла',
          ' бекон',
        ],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
        name: 'Кисло-сладкий цыпленок',
        types: [1],
        sizes: [26, 30, 40],
        price: 18,
        category: 2,
        rating: 2,
        ingredients: [
          'Кисло сладкий соус',
          'томатный соус',
          'цыпленок',
          'красный лук',
          'моцарелла',
          ' бекон',
        ],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
        name: 'Чизбургер-пицца',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 16,
        category: 3,
        rating: 8,
        ingredients: [
          'Мясной соус болоньезе',
          'моцарелла',
          'соленые огурчики',
          'красный лук',
          'томаты',
          ' соус бургер',
        ],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
        name: 'Крэйзи пепперони',
        types: [0],
        sizes: [30, 40],
        price: 18,
        category: 2,
        rating: 2,
        ingredients: ['Томатный соус', 'пикантная пепперони', 'моцарелла'],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
        name: 'Пепперони',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 11,
        category: 1,
        rating: 9,
        ingredients: ['Томатный соус', 'пикантная пепперони', 'моцарелла'],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
        name: 'Маргарита',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 5,
        category: 4,
        rating: 10,
        ingredients: [
          'Томатный соус',
          'Итальянские травы',
          'томаты',
          'моцарелла',
        ],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
        name: 'Четыре сезона',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 16,
        category: 5,
        rating: 10,
        ingredients: [
          'Томатный соус',
          'Итальянские травы',
          'томаты',
          'моцарелла',
          'пикантная пепперони',
          'моцарелла',
          ' ветчина',
          ' шампиньоны',
        ],
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
        name: 'Овощи и грибы 🌱',
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 11,
        category: 5,
        rating: 7,
        ingredients: [
          'Томатный соус',
          'Итальянские травы',
          'томаты',
          'моцарелла',
          ' маслины',
          'моцарелла',
          ' шампиньоны',
        ],
      },
    ]);
  },

  async down(db, client) {
    await db.collection('pizzas').deleteMany({});
  },
};
