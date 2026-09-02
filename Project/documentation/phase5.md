# Phase 5: User Registration

In this phase, I created the user controller and user route. I also learned how to register a user, upload user images, store user details in the database, and test the API with Postman.

### 1) `user.controller.js`

A controller contains the main logic for handling a request. The user controller receives registration data, validates it, processes uploaded images, creates a user, and sends a response.

Where and why I used it:
- I used `user.controller.js` for the user registration process in the YouTube clone backend.
- It controls the complete flow from receiving user details to creating the user in the database.

### 2) User Registration Flow

I followed these steps to create a user and upload the user's details to the database:

1. **Get user details** from the frontend or Thunder Client.
2. **Validate the data** and check that required fields are not empty.
3. **Check whether the user already exists** by checking the username and email.
4. **Check for uploaded images**, such as the avatar and cover image.
5. **Upload the images to Cloudinary** and receive their URLs.
6. **Create the user object** and add the new user entry to the database.
7. **Remove sensitive fields**, such as the password and refresh token, from the response.
8. **Check whether the user was created successfully.**
9. **Return the response** to the client.

Why it is used:
- This order makes sure that invalid, duplicate, or incomplete data is rejected before a user is saved.
- It also protects sensitive user information and ensures that uploaded images are stored correctly.

### 3) `user.route.js`

A route defines the URL and HTTP method that the client uses to access a controller.

Why it is used:
- It connects an API endpoint to the correct controller function.
- This keeps the API structure organized and makes each endpoint easy to find.

Where and why I used it:
- I used `user.route.js` to connect the registration `POST` request with the user registration controller.
- The route receives the user's details and uploaded files, then passes them to the controller.

### 4) Registration Data

I used Postman to send a `POST` request containing the following data:

```text
fullname: "name"
username: "@rusername"
email: "name@gmail.com"
password: "password"
avatar: uploaded file
coverImage: uploaded file
```

Why it is used:
- A `POST` request is used because registration creates a new user in the database.
- Postman helps test the endpoint before connecting it to a frontend.
- The avatar and cover image are sent as uploaded files so the backend can process them with Multer and Cloudinary.

### 5) Bugs I Encountered and Fixed

While testing the registration API, I encountered and fixed bugs in the following files:

- **`multer.middleware.js`**: fixed an issue related to receiving and handling uploaded files.
- **`ApiResponse.js`**: fixed an issue in the structure or handling of API success responses.
- **`cloudinary.js`**: fixed an issue related to uploading files to Cloudinary.

Why debugging these files was important:
- Multer must correctly receive the avatar and cover image before they can be uploaded.
- `ApiResponse.js` must return a consistent response to Postman or the frontend.
- Cloudinary must successfully upload the files and return the required file information.

Fixing these bugs helped me understand how the route, middleware, controller, database, and cloud storage work together during user registration.