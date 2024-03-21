const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student_tasks')
.then(() => console.log('Database connected successfully'))
.catch(() => console.log('Database is not connected'))