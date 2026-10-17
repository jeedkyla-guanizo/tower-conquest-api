'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('leaderboard', [
      {
        game_id: 100001,
        user_id: 1,
        score: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        game_id: 100001,
        user_id: 2,
        score: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        game_id: 100001,
        user_id: 3,
        score: 15,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('leaderboard', null, {});
  }
};