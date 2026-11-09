
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sessions', {
      session_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      host_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      join_code: {
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: true
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: 'LOBBY'
      },
      current_wave: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      tower_health: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sessions');
  }
};
