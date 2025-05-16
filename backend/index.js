const express = require('express');
const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
// const authMiddleware = require('./middleware/authMiddleware');
const taskRoutes = require('./routes/taskRoutes');
// const taskListRoutes = require('./routes/tasklistRoutes');



dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
    allowedHeaders: 'Content-Type, Authorization'
}));

// app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
// app.use('/api/tasklists', authMiddleware, taskListRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));