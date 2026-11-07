
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Player 1
    await queryInterface.bulkUpdate(
      'users',
      { school_id: 'TC00001' },
      { user_id: 1 }
    );

    // Player 2
    await queryInterface.bulkUpdate(
      'users',
      { school_id: 'TC00002' },
      { user_id: 2 }
    );

    // Second Host
    await queryInterface.bulkUpdate(
      'users',
      { school_id: 'TC00003' },
      { user_id: 3 }
    );
  },

  async down(queryInterface, Sequelize) {},
};
