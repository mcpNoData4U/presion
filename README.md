# my-react-app

A modern productivity application designed to help users manage tasks, projects, and notes efficiently. It features a dashboard for quick insights, a flexible Kanban board for project management, a rich text editor for notes, and reporting tools to track progress. The application also supports a theme toggle for light and dark modes.

## Features

*   **Dashboard:** Provides a comprehensive overview of active projects, completed tasks, upcoming tasks, and total documents. Includes a section for recent activity.
*   **Project Board:** A Kanban-style board for managing tasks. Users can drag and drop tasks between columns (e.g., To Do, In Progress, Done).
*   **Notes Editor:** A rich text editor for creating and managing notes and documents.
*   **Productivity Reports:** Visualize productivity and track progress, likely using charts and summaries.
*   **User Settings:** Allows users to customize their experience, including toggling between light and dark themes.
*   **Responsive Design:** The application is designed to work on various screen sizes.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **React Router:** For handling navigation within the application.
*   **FullCalendar:** For displaying interactive calendars (likely used in reports or dashboard).
*   **ApexCharts:** For creating interactive charts (likely used in reports).
*   **Blocknote:** A Notion-style block-based rich text editor.
*   **Dnd-Kit:** A lightweight, performant, and accessible drag and drop toolkit for React.
*   **Framer Motion:** For animations.
*   **React Icons:** For including popular icons in the project.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm: Make sure you have Node.js and npm installed. You can download them from [https://nodejs.org/](https://nodejs.org/).
    *   This project uses a specific Node version defined in `.nvmrc`. If you use nvm, run `nvm use` in the project directory.

### Installation

1.  **Clone the repo:**
    ```sh
    git clone https://github.com/your-username/my-react-app.git
    ```
    *(Replace `your-username/my-react-app.git` with the actual URL of the repository if it's hosted, otherwise, you can state "Clone this repository")*
2.  **Navigate to the project directory:**
    ```sh
    cd my-react-app
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```
This will open the application in your default web browser, usually at `http://localhost:5173` (Vite's default).

## Available Scripts

In the project directory, you can run the following scripts:

*   `npm run dev`
    *   Runs the app in development mode using Vite.
    *   Open [http://localhost:5173](http://localhost:5173) (or the address shown in your terminal) to view it in the browser.
    *   The page will reload if you make edits.

*   `npm run build`
    *   Builds the app for production to the `dist` folder.
    *   It correctly bundles React in production mode and optimizes the build for the best performance.

*   `npm run lint`
    *   Lints the project files using ESLint to check for code quality and style issues.

*   `npm run preview`
    *   Serves the production build from the `dist` folder locally. This is a good way to check if the production build works correctly before deploying.

## Theme Toggle

This application features a theme toggle that allows users to switch between **Light Mode** and **Dark Mode**.

*   The current theme preference is saved in `localStorage` to persist across sessions.
*   The `App.jsx` component handles the logic for applying the theme and toggling it.
*   When Dark Mode is active, the `dark` class is added to the `<html>` element, allowing Tailwind CSS to apply dark theme styles.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
