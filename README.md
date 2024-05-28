# CRM Application Readme

## Overview

This application involves creating a CRM application with both front-end and back-end components. The front-end is built using React and Material-UI, while the back-end is developed using Node.js with a PostgreSQL database.

## Project Structure

The project is organized into the following structure:

- `Crm App`
  - `crm-front-end`
  - `node-backend`
  - `Postman Collection`

## Setup Instructions

### Backend Setup

1. **Configuration:**
   - Navigate to the `node-backend` directory.
   - Open the configuration file (e.g., `config.js`) and update the PostgreSQL settings with your database credentials:
     - Database password
     - Port number
     - Username

2. **Install Dependencies:**
   npm install

3. **Start the Backend Server:**
   npm start

   This command will initialize the PostgreSQL database, create the necessary database and tables, and start the server. The backend server will run on port `3001` by default.

### Frontend Setup

1. **Install Dependencies:**
   - Navigate to the `crm-front-end` directory.
   npm install

2. **Configuration:**
   - If you changed the port number for the backend, update the front-end configuration to match the backend port (default is `3001`). This is typically done in a configuration file (e.g., `src/config.js`) where the API endpoint is defined.

3. **Start the Frontend Server:**
   npm start
   
   The front-end will run on its default port and use Axios for API calls to the backend.

### Database Initialization

- Ensure PostgreSQL is installed and running on your system.
- Starting the backend server with `npm start` will automatically load all the data into the PostgreSQL database, creating the necessary tables and databases.

## Using Postman for API Testing

1. **Postman Collection:**
   - A Postman collection is included in the `Crm App` folder for testing the backend API.
   - Import the collection into Postman:
     - Open Postman.
     - Click on `Import` in the top left corner.
     - Select the file from the `Crm App/Postman Collection` directory.

2. **Testing Endpoints:**
   - Use the imported collection to test various API endpoints.
   - Ensure the backend server is running before sending requests from Postman.

## Usage

Once both servers are running, you can access the application and interact with it. The front-end provides a user interface to interact with the CRM system, while the backend handles API requests and database operations.

## Additional Notes

- Ensure PostgreSQL is properly configured and running before starting the backend server.
- Make sure the backend and frontend configurations are in sync, especially if any default ports or settings are changed.
- The application uses Axios for making API calls from the front-end to the back-end.
