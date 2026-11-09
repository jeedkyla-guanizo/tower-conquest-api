const sessionRepository = require('../repositories/session.repository');
const { conflict, forbidden, notFound } = require('../errors/app-error');

function generateJoinCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function create(user) {
  let joinCode;
  let existingSession;

  do {
    joinCode = generateJoinCode();
    existingSession = await sessionRepository.findByCode(joinCode);
  } while (existingSession);

  return sessionRepository.create({
    host_id: user.user_id,
    join_code: joinCode,
    status: 'LOBBY',
    current_wave: 1,
    tower_health: 100
  });
}

async function get(code) {
  const session = await sessionRepository.findByCode(code);

  if (!session) {
    throw notFound('SESSION_NOT_FOUND', 'Session not found.');
  }

  return session;
}

async function updateStatus(code, status, user) {
  const session = await get(code);

  if (session.host_id !== user.user_id && user.role !== 'ADMIN') {
    throw forbidden('Only the host can update this session.');
  }

  const allowedStatuses = {
    LOBBY: ['RUNNING', 'CLOSED'],
    RUNNING: ['CLOSED'],
    CLOSED: []
  };

  if (!allowedStatuses[session.status]?.includes(status)) {
    throw conflict(
      'INVALID_STATUS_CHANGE',
      'This status change is not allowed.'
    );
  }

  return sessionRepository.update(session, { status });
}

module.exports = {
  create,
  get,
  updateStatus
};
