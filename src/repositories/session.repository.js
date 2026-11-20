
const { GameSession } = require('../models');

async function create(data) {
  return GameSession.create(data);
}

async function findByCode(joinCode) {
  return GameSession.findOne({
    where: { join_code: joinCode }
  });
}

async function update(session, data) {
  return session.update(data);
}

module.exports = {
  create,
  findByCode,
  update
};
