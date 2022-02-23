module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('onePizza').insertMany([
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: 0,
        sizes: 26,
        price: 5,
        category: 0,
        rating: 4,
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: 0,
        sizes: 30,
        price: 8,
        category: 0,
        rating: 4,
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: 0,
        sizes: 40,
        price: 10,
        category: 0,
        rating: 4,
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: 1,
        sizes: 26,
        price: 8,
        category: 0,
        rating: 4,
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: 1,
        sizes: 30,
        price: 11,
        category: 0,
        rating: 4,
      },
      {
        imageUrl:
          'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
        name: 'Пепперони Фреш с перцем',
        types: 1,
        sizes: 40,
        price: 13,
        category: 0,
        rating: 4,
      },
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('onePizza').deleteMany({});
  },
};
