
'use strict';

module.exports = {
  async up(queryInterface) {
    // Update Player 1
    await queryInterface.bulkUpdate(
      'users',
      {
        full_name: 'Alex Reyes',
        email: 'alex.reyes@towerconquest.test'
      },
      { user_id: 1 }
    );

    // Update Player 2
    await queryInterface.bulkUpdate(
      'users',
      {
        full_name: 'Jamie Santos',
        email: 'jamie.santos@towerconquest.test'
      },
      { user_id: 2 }
    );

    // Update Host 1
    await queryInterface.bulkUpdate(
      'users',
      {
        full_name: 'Morgan Cruz',
        email: 'morgan@towerconquest.test'
      },
      { user_id: 3 }
    );

    // Add third Player
    await queryInterface.bulkInsert('users', [{
      user_id: 5,
      username: 'player_five',
      full_name: 'Taylor Garcia',
      email: 'taylor.garcia@towerconquest.test',
      school_id: 'TC00005',
      role: 'PLAYER',
      created_at: new Date(),
      updated_at: new Date()
    }]);

    // Update auto-increment sequence
    await queryInterface.sequelize.query(`
      SELECT setval(
        pg_get_serial_sequence('users', 'user_id'),
        (SELECT MAX(user_id) FROM users)
      );
    `);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', { user_id: 5 });

    await queryInterface.bulkUpdate(
      'users',
      { full_name: null, email: null },
      { user_id: [1, 2, 3] }
    );
  }
};
