
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('players', 'nickname', {
      type: Sequelize.STRING(30),
      allowNull: true
    });

    await queryInterface.addConstraint('players', {
      fields: ['session_id', 'nickname'],
      type: 'unique',
      name: 'players_session_nickname_unique'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint(
      'players',
      'players_session_nickname_unique'
    );

    await queryInterface.removeColumn('players', 'nickname');
  }
};
