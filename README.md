# Student Task Management Application

This web application helps students manage their tasks for different courses. The application is built using Express.js for the backend, MongoDB for the database, and HTML, CSS, and JavaScript for the frontend.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Frontend Interface](#frontend-interface)

## Features
- Add and manage tasks for different courses.
- Retrieve tasks for a specific course.
- User-friendly interface to input task details.
- Responsive design.

## Prerequisites
- Node.js and npm installed
- MongoDB installed and running on your local machine or a remote server

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Shashidharyadav/student-task-manager.git
    cd student-task-manager
    ```

2. **Install backend dependencies:**
    ```sh
    npm install
    ```

3. **Set up MongoDB:**
    - Ensure MongoDB is running.
    - Create a database named `student_tasks` with collections `courses` and `tasks`.

## Running the Application

1. **Start the Express server:**
    ```sh
    npm start
    ```

2. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

