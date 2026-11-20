

module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    'Player',
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      session_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
    },
    {
      tableName: 'players',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    }
  );

  return Player;
};
