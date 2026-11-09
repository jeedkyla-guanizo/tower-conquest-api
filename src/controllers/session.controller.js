const sessionService = require('../services/session.service');

async function create(req, res, next) {
  try {
    const session = await sessionService.create(req.user);

    res.status(201).json({
      data: session
    });
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const session = await sessionService.get(req.params.code);

    res.status(200).json({
      data: session
    });
  } catch (error) {
    next(error);
  }
}

async function updateStatus(req, res, next) {
  try {
    const session = await sessionService.updateStatus(
      req.params.code,
      req.body.status,
      req.user
    );

    res.status(200).json({
      data: session
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  get,
  updateStatus
};