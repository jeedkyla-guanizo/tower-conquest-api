const express = require('express');
const router = express.Router();

const questionSetController = require('../controllers/question-set.controller');
const { validateCreate, validateUpdate } = require('../validators/question-set.validator');
const requireUser = require('../middlewares/require-user');

router.use(requireUser('HOST', 'ADMIN'));

router.get('/', questionSetController.list);
router.get('/:id', questionSetController.get);
router.post('/', validateCreate, questionSetController.create);
router.put('/:id', validateUpdate, questionSetController.update);
router.delete('/:id', questionSetController.remove);

module.exports = router;