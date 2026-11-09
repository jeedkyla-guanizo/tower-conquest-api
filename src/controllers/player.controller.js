const playerService = require('../services/player.service');

async function join(req, res, next) {
  try {
    const result = await playerService.join(req.params.code, req.user);

    res.status(result.created ? 201 : 200).json({
      data: result.player
    });
  } catch (error) {
    next(error);
  }
}

async function list(req, res, next) {
  try {
    const players = await playerService.list(req.params.code);

    res.status(200).json({
      data: players
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  join,
  list
};