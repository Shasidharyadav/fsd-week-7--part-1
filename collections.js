const mongoose = require('mongoose');

const courseSchema = {
    course_id: String,
    name: String,
    instructor: String,
};

const taskSchema = {
    course_id: String,
    task_name: String,
    due_date: Date,
    additional_details: String,
};

const Course = mongoose.model('Course', courseSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = {
    Course: Course,
    Task: Task
};
