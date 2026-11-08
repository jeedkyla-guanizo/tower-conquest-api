
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      'users',
      { role: 'PLAYER' },
      { user_id: 1 }
    );

    await queryInterface.bulkUpdate(
      'users',
      { role: 'PLAYER' },
      { user_id: 2 }
    );

    await queryInterface.bulkUpdate(
      'users',
      { role: 'HOST' },
      { user_id: 3 }
    );
  },

  async down(queryInterface, Sequelize) {},
};
