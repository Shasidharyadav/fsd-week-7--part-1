# Web-Application
You are tasked with developing a web application using Express.js, MongoDB, HTML, CSS, and JavaScript. The application will help students manage their tasks for different courses. Your objective is to create a route that allows students to retrieve all the tasks they need to complete for a particular course.
Instructions :
Set up MongoDB:
Before implementing the route, ensure you have MongoDB installed and running on your local machine or a remote server.
Create a MongoDB database named student_tasks.
Set up a collection named courses to store course information and another collection named tasks to store task details.
Frontend Implementation (HTML, CSS, JavaScript):
Develop a frontend interface using HTML, CSS, and JavaScript to allow users to input task details for various courses.
Create forms where students can specify the course ID, task name, due date, and any additional details for each task.
Implement JavaScript functions to handle form submission and send task data to the backend.
Express.js Backend Implementation:
Set up an Express.js server to handle HTTP requests.
Define a route /courses/:courseId/tasks that allows users to retrieve tasks associated with a specific course ID.
Utilize appropriate middleware to connect to your MongoDB database and fetch tasks based on the provided courseId.
Implement error handling to respond with meaningful messages if the course or tasks are not found.
Ensure your route returns a JSON response with the list of tasks for the specified course.
