const express = require('express');
const { getUserTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
// const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.get('/', getUserTasks);
router.post('/todo',  createTask);
router.put('/:id',  updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
