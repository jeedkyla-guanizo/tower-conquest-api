const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function findFinishedGamePlayers(since) {
  const sql = `
    SELECT 
      g.id AS session_code,
      g.created_at AS started_at,
      g.updated_at AS ended_at,
      u.school_id,
      u.username AS nickname,
      l.score,
      true AS completed
    FROM game_sessions g
    JOIN leaderboard l ON l.game_id = g.game_id
    JOIN users u ON u.user_id = l.user_id
    WHERE (:since::timestamptz IS NULL OR g.updated_at > :since::timestamptz)
    ORDER BY g.updated_at, l.score DESC
  `;

  return sequelize.query(sql, {
    type: QueryTypes.SELECT,
    replacements: { since: since ? since.toISOString() : null },
  });
}

module.exports = {
  findFinishedGamePlayers,
};