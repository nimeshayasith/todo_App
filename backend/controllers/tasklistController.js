const TaskList = require('../models/TaskList');

// Create a new task list
const createTaskList = async (req, res) => {
  const { name } = req.body;
  try {
    const taskList = new TaskList({ name, user: req.user.id });
    await taskList.save();
    res.json(taskList);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

//   Get all task lists for the logged-in user
const getTaskLists = async (req, res) => {
  try {
    const taskLists = await TaskList.find({ user: req.user.id });
    res.json(taskLists);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a task list
const updateTaskList = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const taskList = await TaskList.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.json(taskList);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a task list
const deleteTaskList = async (req, res) => {
  const { id } = req.params;
  try {
    await TaskList.findByIdAndDelete(id);
    res.json({ message: 'Task list deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createTaskList, getTaskLists, updateTaskList, deleteTaskList };