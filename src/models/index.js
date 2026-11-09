
// ONE Sequelize instance (one connection pool) for the whole API.
const { Sequelize, DataTypes } = require('sequelize');
const env = require('../config/env');
const dbConfig = require('../config/database')[env.nodeEnv];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

// Load Models
const User = require('./user')(sequelize, DataTypes);
const QuestionSet = require('./question-set')(sequelize, DataTypes);
const GameSession = require('./game-session')(sequelize, DataTypes);
const Player = require('./player')(sequelize, DataTypes);

// User and Question Set Relationship
User.hasMany(QuestionSet, { foreignKey: 'host_id' });
QuestionSet.belongsTo(User, { foreignKey: 'host_id' });

// User and Session Relationship
User.hasMany(GameSession, { foreignKey: 'host_id' });
GameSession.belongsTo(User, { foreignKey: 'host_id' });

// Session and Player Relationship
GameSession.hasMany(Player, { foreignKey: 'session_id' });
Player.belongsTo(GameSession, { foreignKey: 'session_id' });

// User and Player Relationship
User.hasMany(Player, { foreignKey: 'user_id' });
Player.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  Sequelize,
  DataTypes,
  User,
  QuestionSet,
  GameSession,
  Player
};
