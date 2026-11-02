module.exports = (sequelize, DataTypes) => {
  const GameSession = sequelize.define(
    'GameSession',
    {
      session_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      host_id: { type: DataTypes.INTEGER, allowNull: false },
      status: { type: DataTypes.STRING(50), allowNull: false, defaultValue: 'active' },
      current_wave: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      tower_health: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 100 }
    },
    { tableName: 'game_sessions', timestamps: true, createdAt: 'created_at', updatedAt: false }
  );

  return GameSession;
};