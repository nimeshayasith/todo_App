const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title} = req.body;
  try {
    const task = new Task({ title});
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// module.exports = { createTask, updateTask, deleteTask, getUserTasks };
