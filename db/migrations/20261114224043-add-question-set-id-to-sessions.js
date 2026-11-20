'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('sessions', 'question_set_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'question_sets',
        key: 'set_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('sessions', 'question_set_id');
  }
};
