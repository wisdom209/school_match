# SchoolMatch Django API Documentation

This documentation provides detailed information about the SchoolMatch Django API's endpoints and their usage.

## API Endpoints

### Degrees

- **List Degrees**
- **Endpoint:** `/api/school/degree/`
- **Method:** GET
- **Description:** List all degrees.
- **Authentication:** Not required.
- **Payload:** None

- **Create Degree**
- **Endpoint:** `/api/school/degree/`
- **Method:** POST
- **Description:** Create a new degree.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "slug": "bsc",
   "title": "Bachelor of Science"
 }
 ```

### Grades

- **List Grades**
- **Endpoint:** `/api/school/grade/`
- **Method:** GET
- **Description:** List all grades.
- **Authentication:** Not required.
- **Payload:** None

- **Create Grade**
- **Endpoint:** `/api/school/grade/`
- **Method:** POST
- **Description:** Create a new grade.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "slug": "a",
   "grade": "A"
 }
 ```

### Programs

- **List Programs**
- **Endpoint:** `/api/school/program/`
- **Method:** GET
- **Description:** List all programs.
- **Authentication:** Not required.
- **Payload:** None

- **Create Program**
- **Endpoint:** `/api/school/program/`
- **Method:** POST
- **Description:** Create a new program.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "name": "Computer Science",
   "program_detail": "Bachelor's degree in Computer Science"
 }
 ```

### Schools

- **List Schools**
- **Endpoint:** `/api/school/school/`
- **Method:** GET
- **Description:** List all schools.
- **Authentication:** Not required.
- **Payload:** None

- **Create School**
- **Endpoint:** `/api/school/school/`
- **Method:** POST
- **Description:** Create a new school.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "name": "Example University",
   "school_type": "University",
   "school_link": "https://www.exampleuniversity.edu",
   "country": "United States"
 }
 ```

### Departments

- **List Departments**
- **Endpoint:** `/api/school/department/`
- **Method:** GET
- **Description:** List all departments.
- **Authentication:** Not required.
- **Payload:** None

- **Create Department**
- **Endpoint:** `/api/school/department/`
- **Method:** POST
- **Description:** Create a new department.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "title": "Computer Engineering",
   "program": 1,
   "school": 1,
   "grade": 1,
   "degree": 1
 }
 ```

### Images

- **List Images**
- **Endpoint:** `/api/school/image/`
- **Method:** GET
- **Description:** List all images.
- **Authentication:** Not required.
- **Payload:** None

- **Create Image**
- **Endpoint:** `/api/school/image/`
- **Method:** POST
- **Description:** Create a new image.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "title": "Campus Image",
   "link": "https://www.exampleuniversity.edu/images/campus.jpg",
   "school": 1
 }
 ```

### User Management

- **Create User Account**
- **Endpoint:** `/api/user/create-account/`
- **Method:** POST
- **Description:** Create a user account.
- **Authentication:** Not required.
- **Payload:**
 ```json
 {
   "first_name": "John",
   "last_name": "Doe",
   "username": "johndoe",
   "email": "johndoe@example.com",
   "password": "password123",
   "confirm_password": "password123"
 }
 ```

- **Login**
- **Endpoint:** `/api/user/login/`
- **Method:** POST
- **Description:** Login and obtain an authentication token.
- **Authentication:** Not required.
- **Payload:**
 ```json
 {
   "username": "johndoe",
   "password": "password123"
 }
 ```

- **Logout**
- **Endpoint:** `/api/user/logout/`
- **Method:** POST
- **Description:** Logout and invalidate the token.
- **Authentication:** Token required.
- **Payload:** None

- **User Profile**
- **Endpoint:** `/api/user/profile/`
- **Method:** GET
- **Description:** Retrieve the user's profile.
- **Authentication:** Token required.
- **Payload:** None

- **Update User Profile**
- **Endpoint:** `/api/user/profile/{user_id}/`
- **Method:** PATCH
- **Description:** Update the user's profile.
- **Authentication:** Token required.
- **Payload:**
 ```json
 {
   "first_name": "Updated First Name",
   "last_name": "Updated Last Name"
 }
 ```

### Favorites

- **List User Favorites**
- **Endpoint:** `/api/user/favorites/{user_id}/`
- **Method:** GET
- **Description:** List all user favorites.
- **Authentication:** Token required.
- **Payload:** None

- **Create Favorite**
- **Endpoint:** `/api/user/favorites/{user_id}/`
- **Method:** POST
- **Description:** Create a new favorite.
- **Authentication:** Token required.
- **Payload:**
 ```
