'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('leaderboard', [
      {
        leaderboard_id: 1,
        user_id: 1,
        session_id: 101,
        high_score: 1500,
        achieved_at: new Date()
      },
      {
        leaderboard_id: 2,
        user_id: 2,
        session_id: 102,
        high_score: 800,
        achieved_at: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('leaderboard', null, {});
  }
};