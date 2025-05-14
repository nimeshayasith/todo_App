const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);