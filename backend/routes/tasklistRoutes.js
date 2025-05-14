const express = require('express');
const { createTaskList, getTaskLists, deleteTaskList } = require('../controllers/tasklistController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createTaskList);
router.get('/', authMiddleware, getTaskLists);
router.delete('/:id', authMiddleware, deleteTaskList);

module.exports = router;
