// src/services/question-set.service.js
const questionSetRepository = require('../repositories/question-set.repository');
const { notFound } = require('../errors/app-error');

async function list() {
  return questionSetRepository.findAll();
}

async function get(id) {
  const record = await questionSetRepository.findById(id);
  if (!record) {
    throw notFound('QUESTION_SET_NOT_FOUND', 'Question set not found.');
  }
  return record;
}

async function create(data) {
  return questionSetRepository.create(data);
}

async function update(id, changes) {
  const record = await get(id);
  return questionSetRepository.update(record, changes);
}

async function remove(id) {
  const record = await get(id);
  return questionSetRepository.remove(record);
}

module.exports = { list, get, create, update, remove };