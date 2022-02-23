module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('sauces').insertMany([
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/2c11dfce-061d-47dd-96fa-502df22922bf.jpg',
        name: 'Сырный',
        price: 1,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/8574687b-6532-43a3-ae92-fb9a13136f19.jpg',
        name: 'Барбекю',
        price: 1,
      },
      {
        imageUrl:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/45b043c4-695c-4a54-be64-09f65fed1a81.jpg',
        name: 'Ранч',
        price: 1,
      },
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('sauces').deleteMany({});
  },
};
