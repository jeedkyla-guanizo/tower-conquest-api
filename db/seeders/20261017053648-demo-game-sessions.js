'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('game_sessions', [
      {
        game_id: 1,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        game_id: 1,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        game_id: 1,
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('game_sessions', null, {});
  }
};