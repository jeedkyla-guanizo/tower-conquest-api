'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        username: 'player_one',
        created_at: new Date()
      },
      {
        user_id: 2,
        username: 'player_two',
        created_at: new Date()
      },
      {
        user_id: 3,
        username: 'player_three',
        created_at: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};