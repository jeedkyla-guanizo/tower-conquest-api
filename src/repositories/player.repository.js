
const { Player } = require('../models');

async function create(data) {
  return Player.create(data);
}

async function findBySessionAndUser(sessionId, userId) {
  return Player.findOne({
    where: {
      session_id: sessionId,
      user_id: userId
    }
  });
}

async function findAllBySession(sessionId) {
  return Player.findAll({
    where: { session_id: sessionId },
    order: [['created_at', 'ASC']]
  });
}

async function countBySession(sessionId) {
  return Player.count({
    where: { session_id: sessionId }
  });
}

module.exports = {
  create,
  findBySessionAndUser,
  findAllBySession,
  countBySession
};
