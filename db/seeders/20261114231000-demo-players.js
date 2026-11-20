'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const sessions = await queryInterface.sequelize.query(
      `SELECT session_id FROM sessions
       WHERE join_code = '276800'
       LIMIT 1`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (sessions.length === 0) {
      throw new Error('Seed session 276800 was not found.');
    }

    const players = await queryInterface.sequelize.query(
      `SELECT user_id, username FROM users
       WHERE role = 'PLAYER'
       ORDER BY user_id`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (players.length === 0) {
      throw new Error('No PLAYER users found.');
    }

    await queryInterface.bulkInsert(
      'players',
      players.map((player) => ({
        user_id: player.user_id,
        session_id: sessions[0].session_id,
        nickname: null,
        score: 0,
        level: 1,
        created_at: new Date()
      }))
    );
  },

  async down(queryInterface) {
    const sessions = await queryInterface.sequelize.query(
      `SELECT session_id FROM sessions
       WHERE join_code = '276800'
       LIMIT 1`
    );

    if (sessions[0].length > 0) {
      await queryInterface.bulkDelete('players', {
        session_id: sessions[0][0].session_id
      });
    }
  }
};
