'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('game_sessions', [
      {
        session_id: 101,
        user_id: 1,
        final_score: 1500,
        max_streak: 5,
        tower_height: 12,
        played_at: new Date()
      },
      {
        session_id: 102,
        user_id: 2,
        final_score: 800,
        max_streak: 2,
        tower_height: 6,
        played_at: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('game_sessions', null, {});
  }
}