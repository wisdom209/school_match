# SchoolMatch Django API

SchoolMatch is a Django API for managing information related to educational degrees, grades, programs, schools, departments, and user favorites. This API provides endpoints for CRUD operations on various models and includes user authentication and authorization using tokens.

## Installation

1. Clone the repository to your local machine:
  ** git clone https://github.com/TessyJames28/school_match.git

2. Install the required Python packages using pip:
  ** pip install -r requirements.txt

3. Run migrations to set up the database:
  ** python manage.py migrate

4. Start the development server:
  ** python manage.py runserver

5. Access the API at `http://localhost:8000/api/`.

## API Endpoints

### Degrees

- **GET `/api/school/degree/`**: List all degrees.
- **POST `/api/school/degree/`**: Create a new degree.

### Grades

- **GET `/api/school/grade/`**: List all grades.
- **POST `/api/school/grade/`**: Create a new grade.

### Programs

- **GET `/api/school/program/`**: List all programs.
- **POST `/api/school/program/`**: Create a new program.

### Schools

- **GET `/api/school/school/`**: List all schools.
- **POST `/api/school/school/`**: Create a new school.

### Departments

- **GET `/api/school/department/`**: List all departments.
- **POST `/api/school/department/`**: Create a new department.

### Images

- **GET `/api/school/image/`**: List all images.
- **POST `/api/school/image/`**: Create a new image.

### User Management

- **POST `/api/user/create-account/`**: Create a user account.
- **POST `/api/user/login/`**: Login and obtain an authentication token.
- **POST `/api/user/logout/`**: Logout and invalidate the token.
- **GET `/api/user/profile/`**: Retrieve the user's profile.
- **PATCH `/api/user/profile/{user_id}/`**: Update the user's profile.

### Favorites

- **GET `/api/user/favorites/{user_id}/`**: List all user favorites.
- **POST `/api/user/favorites/{user_id}/`**: Create a new favorite.
- **GET `/api/user/favorites/{user_id}/{favorite_id}/`**: Retrieve a specific favorite.
- **PUT `/api/user/favorites/{user_id}/{favorite_id}/`**: Update a specific favorite.
- **DELETE `/api/user/favorites/{user_id}/{favorite_id}/`**: Delete a specific favorite.

### Search

- **GET `/api/school/search/`**: Search for departments based on various parameters.

## Authentication

- Authentication is required for certain endpoints and is handled via token authentication.
- Obtain a token by logging in at `/api/user/login/`. Include the token in the `Authorization` header of subsequent requests.

## API Documentation

For detailed information on how to use the API and the available endpoints, refer to the [API Documentation](DOCUMENTATION.md).

