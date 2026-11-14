
module.exports = (sequelize, DataTypes) => {
  const GameSession = sequelize.define(
    'GameSession',
    {
      session_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      host_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      question_set_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      join_code: {
        type: DataTypes.STRING(6),
        allowNull: false,
        unique: true
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'LOBBY'
      },
      current_wave: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      tower_health: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100
      }
    },
    {
      tableName: 'sessions',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    }
  );

  return GameSession;
};
