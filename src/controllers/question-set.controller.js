const questionSetService = require('../services/question-set.service');

async function list(req, res, next) {
  try {
    const hostId = req.query.host_id;
    const questionSets = await questionSetService.list(hostId);
    res.json(questionSets);
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const { id } = req.params;
    const questionSet = await questionSetService.get(id);
    res.json(questionSet);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const questionSet = await questionSetService.create(req.body);
    return res.status(201).json(questionSet);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const updatedQuestionSet = await questionSetService.update(id, req.body);
    res.json(updatedQuestionSet);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const { id } = req.params;
    await questionSetService.remove(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = { list, get, create, update, remove, };