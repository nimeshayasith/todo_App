const mongoose = require('mongoose');

const TaskListSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  name: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
},
{ timestamps: true });

module.exports = mongoose.model('TaskList', TaskListSchema);
