# React Project Assessment

This project is an assessment task and serves as a starting point for a React-based web application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Running Example](#running-example)

## Prerequisites

Before you begin, make sure you have the following requirements in place:

- [Node.js](https://nodejs.org/) installed on your development machine.
- A package manager like [npm](https://www.npmjs.com/) installed.

## Getting Started

Follow these steps to set up and run the React project on your local machine:

### Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/FaisalRehman0344/assessment.git
   ```
2. Navigate to the project directory:
   ```
   cd assessment
   ```
3. Install project dependencies:
   If you're using npm:
   ```
   npm install
   ```

### Running the Application

1. Start the development server:
   ```
   npm start
   ```
2. Open your web browser and visit http://localhost:3000 to view the application. The development server should automatically reload the app if you make any code changes.

## Project Structure

The project directory is organized as follows:

- `public/`: This directory contains the HTML template and any public assets such as images or fonts that need to be served directly to the client.

- `src/`: Inside this directory, you'll find the source code of the React application:

  - `components/`: All the screens, controllers, and models are present in this directory.

      - `controllers/`: All business login-related files are present in controllers.

      - `models/`: All data models i.e. data classes are present in models.

      - `screens/`: All UI Screens and their stylings are present in the screens directory.

      - `protectors/`: All route protectors (Authentication) are present in the protectors directory.

      - `enums/`: All Constants are present in the enums directory.

  - `App.js`: This is the main application component where you can structure the overall layout and routing of your application.

  - `index.js`: This is the entry point for the React application. It renders the root component into the HTML DOM.

- `package.json`: This file lists the project dependencies and defines various scripts for managing the project.

## Running Example

https://assessment-task-87021.web.app/
