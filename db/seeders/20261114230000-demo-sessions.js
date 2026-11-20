'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const questionSets = await queryInterface.sequelize.query(
      `SELECT set_id FROM question_sets
       WHERE host_id = 4
       ORDER BY set_id ASC
       LIMIT 1`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (questionSets.length === 0) {
      throw new Error('No question set found for host 4.');
    }

    await queryInterface.bulkInsert('sessions', [
      {
        host_id: 4,
        question_set_id: questionSets[0].set_id,
        join_code: '276800',
        status: 'LOBBY',
        current_wave: 1,
        tower_health: 100,
        created_at: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('sessions', {
      join_code: '276800'
    });
  }
};
