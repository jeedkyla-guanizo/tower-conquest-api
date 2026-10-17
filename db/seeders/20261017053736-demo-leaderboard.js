'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('leaderboard', [
      {
        game_id: 1,
        user_id: 1,
        score: 150,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        game_id: 1,
        user_id: 2,
        score: 120,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        game_id: 1,
        user_id: 3,
        score: 90,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('leaderboard', null, {});
  }
};