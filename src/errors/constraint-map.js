// A database rule was broken -> what the client should hear.
// The key is the constraint name from YOUR migration. PostgreSQL names a
// foreign key "<table>_<column>_fkey" when the migration does not name it.
// Write one entry for each constraint a client can hit. Example:
//
//   uq_player_nickname: {
//     status: 409,
//     code: 'NICKNAME_TAKEN',
//     message: 'That nickname is already used in this game.',
//   },
//
// A constraint that is not listed here still answers 409, with the code CONFLICT.
module.exports = {
  players_session_nickname_unique: {
    status: 409,
    code: 'NICKNAME_TAKEN',
    message: 'That nickname is already used in this session.'
  },

  players_session_user_unique: {
    status: 409,
    code: 'PLAYER_ALREADY_JOINED',
    message: 'This player already has a seat in this session.'
  },

  sessions_join_code_key: {
    status: 409,
    code: 'DUPLICATE_JOIN_CODE',
    message: 'This join code is already in use.'
  },

  sessions_host_id_fkey: {
    status: 409,
    code: 'INVALID_SESSION_HOST',
    message: 'The selected host does not exist.'
  },

  players_session_id_fkey: {
    status: 409,
    code: 'INVALID_SESSION',
    message: 'The selected session does not exist.'
  },

  players_user_id_fkey: {
    status: 409,
    code: 'INVALID_PLAYER',
    message: 'The selected user does not exist.'
  },

  question_sets_host_id_fkey: {
    status: 409,
    code: 'INVALID_QUESTION_SET_HOST',
    message: 'The selected host does not exist.'
  },

  sessions_question_set_id_fkey: {
    status: 409,
    code: 'QUESTION_SET_IN_USE',
    message: 'This question set is used in a game and cannot be deleted.'
  }
};
