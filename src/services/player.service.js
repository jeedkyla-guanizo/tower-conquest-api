
const playerRepository = require('../repositories/player.repository');
const sessionRepository = require('../repositories/session.repository');
const { conflict, notFound } = require('../errors/app-error');

async function join(code, user) {
  const session = await sessionRepository.findByCode(code);

  if (!session) {
    throw notFound('SESSION_NOT_FOUND', 'Session not found.');
  }

  // Check first if the player already has a seat.
  const existingPlayer = await playerRepository.findBySessionAndUser(
    session.session_id,
    user.user_id
  );

  // Returning players keep their existing seat and score.
  if (existingPlayer) {
    return {
      player: existingPlayer,
      created: false
    };
  }

  if (session.status === 'CLOSED') {
    throw conflict('SESSION_ENDED', 'This session has ended.');
  }

  if (session.status !== 'LOBBY') {
    throw conflict(
      'SESSION_NOT_JOINABLE',
      'This session has already started.'
    );
  }

  // Create a new player.
  try {
    const player = await playerRepository.create({
      session_id: session.session_id,
      user_id: user.user_id,
      score: 0,
      level: 1
    });

    return {
      player,
      created: true
    };
  } catch (error) {
    // Handle simultaneous join requests.
    if (error.name === 'SequelizeUniqueConstraintError') {
      const player = await playerRepository.findBySessionAndUser(
        session.session_id,
        user.user_id
      );

      if (player) {
        return {
          player,
          created: false
        };
      }
    }

    throw error;
  }
}

async function list(code) {
  const session = await sessionRepository.findByCode(code);

  if (!session) {
    throw notFound('SESSION_NOT_FOUND', 'Session not found.');
  }

  return playerRepository.findAllBySession(session.session_id);
}

module.exports = {
  join,
  list
};
