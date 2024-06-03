# Task Tracker - Todo Application

## Description

**Task Tracker** is a simple and intuitive Todo application built with React. This application helps users keep track of their tasks, demonstrating the use of React hooks, state management, and conditional rendering. It also showcases how to handle user input, validation, and manage component states effectively.

## Features

- **Add Tasks:** Users can add new tasks.
- **Edit Tasks:** Tasks can be edited to update the task description.
- **Delete Tasks:** Users can delete tasks that are no longer needed.
- **Mark as Complete:** Tasks can be marked as complete, and completed tasks will be displayed with a strikethrough.
- **Error Handling:** Displays an error message if the user tries to add an empty task.

## How to Use

1. **Add a Task:** Enter your task in the input field and click "Add Task".
2. **Edit a Task:** Click the edit icon next to the task you want to update, make your changes, and click "Update".
3. **Delete a Task:** Click the trash icon next to the task you want to delete.
4. **Mark a Task as Complete:** Click on the task description to mark it as complete.

## Project Structure

- **TodoForm:** Handles the addition of new tasks.
- **EditTodoForm:** Handles editing existing tasks.
- **Todo:** Displays individual tasks with options to edit, delete, and mark as complete.
- **ToDoWrapper:** Manages the state of tasks and includes logic for adding, editing, deleting, and toggling the completion of tasks.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/task-tracker.git
   cd task-tracker
2. **Install dependencies:**
```sh
   npm install
````
3. **Run the application:**
```sh
   npm run dev
````

## Dependencies

- **React:** A JavaScript library for building user interfaces.
- **uuid:** For generating unique IDs for each task.
- **FontAwesome:** For icons used in the application.

## Future Enhancements

- **User Authentication:** Allow users to create accounts and save tasks in a database.
- **Categories:** Organize tasks into different categories.
- **Priority Levels:** Assign priority levels to tasks.
- **Notifications:** Send notifications for due dates and reminders.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
