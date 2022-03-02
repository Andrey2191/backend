module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('ingredients').insertMany([
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD52EEF6AB',
        name: 'Острая чоризо',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBADBE03C312',
        name: 'Бекон',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/80ec81ec3d034f8dbae515baf85acb4f.png',
        name: 'Митболы',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD1DBB21AA',
        name: 'Острый халапеньо',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD8A35FD03',
        name: 'Чеддер и пармезан',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD72ED2820',
        name: 'Ананасы',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD10EF7B80',
        name: 'Цыплёнок',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD64FE3988',
        name: 'Томаты',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD4B066CBC',
        name: 'Пикантная пепперони',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD96854BA8',
        name: 'Брынза',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9EA89CD3AAAFB',
        name: 'Солёные огурчики',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD369D06C3',
        name: 'Красный лук',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD6055062E',
        name: 'Сладкий перец',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD92015441',
        name: 'Сыр блю чиз',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/36cf2411c86f46ebae8878ca1e2cc7b2.png',
        name: 'Итальянские травы',
        price: 2,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611EA083D08EB8ED7',
        name: 'Моцарелла',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD42D4B952',
        name: 'Ветчина',
        price: 3,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD6D51B919',
        name: 'Шампиньоны',
        price: 2,
      },
    ]);
  },

  async down(db, client) {
    await db.collection('ingredients').deleteMany({});
  },
};
