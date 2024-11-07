# Fitness Tracker Application

This is a full-stack fitness tracker application that allows users to log and track various exercises, including cardio and weight-based workouts. The backend is built with Spring Boot, and the frontend is developed using React with Vite for fast bundling and development.

## Features

- **User Management**: Create and manage user profiles.
- **Exercise Tracking**: Log different types of exercises, including cardio and weight-based workouts.
- **Data Persistence**: Uses PostgreSQL for data storage.

## Technologies Used

- **Java & Spring Boot**: Backend framework for building and running the application.
- **PostgreSQL**: Database to store user and exercise data.
- **Java Dotenv**: Loads environment variables from a `.env` file.
- **Maven**: Dependency management and build tool.
- **React with Vite**: Frontend framework and fast build tool.

## Prerequisites

- **Java 11** or higher
- **Maven**
- **PostgreSQL** installed and running
- **Git**
- **Node.js** (for Vite/React)

## Setup Instructions

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/caycurry01/fitness_app.git
   cd fitness_app
   ```

2. **Configure Environment Variables**:

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   DATABASE_URL=jdbc:postgresql://localhost:5432/{database_name}
   DATABASE_USERNAME=your_db_username
   DATABASE_PASSWORD=your_db_password
   ```

   Replace `your_db_username` and `your_db_password` with your PostgreSQL credentials.

3. **Build and Run the Backend**:

   - Build the project with Maven:
     ```bash
     mvn clean install
     ```

   - Run the application:
     ```bash
     mvn spring-boot:run
     ```

   The backend application should start running on `http://localhost:8080`.

### Frontend Setup with Vite

1. **Navigate to the `frontend` Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

   By default, Vite will start the frontend on `http://localhost:3000`. Ensure that any API calls in the frontend are configured to point to the backend URL at `http://localhost:8080`.

### Database Setup

1. Ensure PostgreSQL is running.
2. Create a database for the application:
   ```sql
   CREATE DATABASE fitness_app;
   ```

3. The application will automatically create tables based on the entity classes when it starts.

## Usage

- **Endpoints**: The backend exposes RESTful endpoints for managing users and exercises.
- **Frontend**: The frontend, built with React and Vite, is located in the `frontend` directory and interacts with the backend API.

## Contact

For questions or contributions, feel free to reach out at [cayla.curry01@gmail.com].
