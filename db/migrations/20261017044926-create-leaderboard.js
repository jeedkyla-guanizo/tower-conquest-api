'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leaderboard', {
      leaderboard_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'CASCADE'
      },
      session_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'game_sessions',
          key: 'session_id'
        },
        onDelete: 'CASCADE'
      },
      high_score: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      achieved_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      }
    });

    // Paggawa ng unique constraint para sa session_id batay sa ERD
    await queryInterface.addConstraint('leaderboard', {
      type: 'unique',
      name: 'uq_leaderboard_session',
      fields: ['session_id']
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('leaderboard');
  }
};