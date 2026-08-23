# YouTube Clone Project

Here we are creating a YouTube clone to learn how the backend works behind the seen.

## Phase 1

- Created all the essential folders and files needed for the project.
- Installed all the required dependencies.

## Phase 2

We learned about **MongoDB**, which is a document-oriented database that stores data in flexible, JSON-like documents instead of rigid tables.

### What MongoDB Is

- **Type:** NoSQL, document database
- **Data Model:** Stores records as documents, similar to JSON objects
- **Collections:** Groups of documents, like tables in SQL but schema-less
- **Format:** Internally uses BSON (Binary JSON) for efficiency

We also learned how to create a project in **MongoDB Atlas** and connect it to the existing project.

## Async and Await

We learned about **async** and **await**.

- **async** → Makes your function return a Promise.
- **await** → Lets you write database calls as if they were synchronous, making Mongoose code easier to read and debug.

## Development Script

We added the following script:

```json
"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
```

This development command does three important things at once:

- **Convenience:** You don’t need to manually configure dotenv in your code.
- **Modern ES Modules:** Lets you use import syntax with JSON.
- **Developer Workflow:** Nodemon keeps your server running and auto-reloads on changes.

### Breakdown

- **nodemon** → Runs your app and automatically restarts it when files change.
  - Perfect for development, so you don’t have to stop and start manually.

- **-r dotenv/config** → The `-r` flag means “require this module before running.”
  - It loads `dotenv/config`, which automatically reads your `.env` file and injects variables into `process.env`.
  - This means you don’t need to write `require('dotenv').config()` in your code; it is handled at startup.

- **--experimental-json-modules** → Enables Node.js to import JSON files directly using `import data from './file.json'`.
  - Normally, Node requires you to use `fs.readFile` or `require()`. This flag makes JSON imports work with ES modules.

- **src/index.js** → The entry point of your app. Nodemon will run this file and restart it whenever you edit files inside the project.

## Phase 3

In this phase, I learned how backend applications handle incoming requests, manage data, and build cleaner APIs.

### 1) Request and Response Handling

A backend app receives client requests and sends responses back to the client.

- Request: data sent by the browser or frontend, such as login details, video information, or file uploads.
- Response: the result sent back by the server, such as success message, error, or data object.

Why it is used:
- Every API endpoint in the project works on this request-response cycle.
- For example, when a user signs up or uploads a video, the frontend sends a request, and the backend processes it and returns a response.

### 2) cookie-parser and cors

#### cookie-parser
`cookie-parser` helps the server read cookies sent by the browser.

Why it is used:
- Cookies are often used for authentication, session tracking, or storing small user preferences.
- In a real backend, this helps identify whether a user is logged in.

Where it is used:
- It is useful when we work with login sessions, JWT tokens, or user authentication in the app.

#### cors
`cors` allows requests from different origins to communicate safely.

Why it is used:
- The frontend and backend often run on different ports or domains.
- Without CORS, the browser blocks requests from one origin to another.

Where it is used:
- In this project, the frontend and backend are separate pieces, so CORS is needed so the frontend can call API endpoints on the backend.

### 3) express.json, express.urlencoded, and express.static

These are built-in Express middlewares used to handle different kinds of incoming data.

#### express.json()
Used to parse JSON data from requests.

Why it is used:
- Frontend often sends data like `{ name: "John", email: "john@example.com" }` in JSON format.
- The server must parse this body before working with it.

#### express.urlencoded()
Used to parse form data submitted from HTML forms.

Why it is used:
- Some requests come in URL-encoded format, like form submissions.
- This helps the server read form fields correctly.

#### express.static()
Used to serve static files such as images, CSS, JS, or uploaded assets.

Why it is used:
- If the project stores files like thumbnails, profile images, or uploaded media, they can be served directly from the server.
- In a YouTube-like project, this is useful for serving media files to the client.

### 4) Custom Utility Files

I created utility files:

- `apiError.js`
- `apiResponse.js`
- `asyncHandler.js`

These files help keep the code clean and consistent.

#### apiError.js
This file creates custom error objects.

Why it is used:
- Instead of throwing plain errors everywhere, the backend sends a structured error response.
- It helps developers understand what went wrong and what status code to return.

#### apiResponse.js
This file creates a standard success response format.

Why it is used:
- The project can return responses in a consistent structure like success status, message, and data.
- This makes frontend handling easier.

#### asyncHandler.js
This file wraps async controller functions and handles errors automatically.

Why it is used:
- In Node.js, async functions can throw errors that need proper handling.
- This wrapper prevents repetitive try/catch blocks and keeps the code cleaner.

Where it is used:
- It is used around route handlers and controller logic where database operations or API calls happen.

### 5) mongoose-aggregate-paginate

This package helps with pagination on MongoDB aggregation results.

Why it is used:
- When a project has many videos or users, we cannot return all records at once.
- Pagination helps break results into pages and improves speed and user experience.

Where it is used:
- It is useful in video listing APIs, where the backend may need to fetch a subset of videos according to page number and limit.

### 6) bcrypt

`bcrypt` is used to hash passwords before saving them in the database.

Why it is used:
- Passwords should never be stored in plain text.
- Hashing converts them into a secure encoded form, making it harder for attackers to read user passwords.

Where it is used:
- In user registration and login flow, before storing the password in the `user` model.

### 7) Prehook in Mongoose

A prehook is a middleware function that runs before a database action, such as `save()`.

Why it is used:
- It helps us perform actions automatically before storing data.
- Example: hashing a password before saving a user.

Where it is used:
- In the user model, a `pre('save')` hook can hash the password before the document is saved.

This is helpful because we do not have to manually hash the password in every controller.

### 8) Models: user.model and video.model

I built models to define the structure of data stored in MongoDB.

#### user.model
This defines the user schema.

Why it is used:
- It tells MongoDB what fields a user should have, such as name, email, password, avatar, and watch history.
- It also helps enforce validation and default values.

#### video.model
This defines the video schema.

Why it is used:
- It stores information about each uploaded video, such as title, description, owner, duration, views, likes, and video URL.
- In a YouTube clone, videos are the core content of the app.

## Phase 4

In this phase, I learned how to handle file uploads, store media in the cloud, understand HTTP communication, and test the user registration API.

### 1) Cloudinary

Cloudinary is a cloud service used to upload, store, manage, and deliver media files such as images and videos.

Why it is used:
- Storing large media files on the application server can use too much disk space.
- Cloudinary stores files online and provides a URL that can be saved in MongoDB.
- It also provides media delivery and management features.

Where and why I used it:
- I used Cloudinary for user profile images and video-related files in the YouTube clone.
- The backend uploads a file to Cloudinary, receives its URL and public ID, and stores the required information with the user or video document.

### 2) Multer

Multer is an Express middleware used to receive files sent through `multipart/form-data` requests.

Why it is used:
- Normal JSON requests cannot directly carry files in the same way as a form upload.
- Multer reads the uploaded file and makes its details available to the backend through `req.file` or `req.files`.

Where and why I used it:
- I used Multer in upload routes for profile images, cover images, thumbnails, and videos.
- It handles the file coming from the client before the file is uploaded to Cloudinary.

### 3) Node.js `fs` Module

The `fs` module is Node.js's built-in file system module. It is used to read, create, move, and delete files on the local computer.

Why it is used:
- Multer can temporarily store an uploaded file on the local server.
- The `fs` module can read that local file when sending it to Cloudinary and remove it after the upload is complete.

Where and why I used it:
- I used `fs` to work with temporary uploaded files during the media-upload process.
- Removing temporary files after a successful or failed upload prevents unnecessary files from filling the server's storage.

### 4) HTTP

HTTP, or Hypertext Transfer Protocol, is the communication protocol used by clients and servers to exchange data.

In this project:
- The frontend or Thunder Client acts as the client.
- The Express application acts as the server.
- The client sends an HTTP request to an API endpoint, and the server returns an HTTP response.

### 5) HTTP Headers

HTTP headers are key-value pairs that provide additional information about a request or response.

Why they are used:
- They describe the type of data being sent, provide authentication information, and control how the request or response should be handled.

Important headers I learned:

- `Content-Type`: tells the server what format the request body uses, such as JSON or multipart form data.
- `Authorization`: can carry an access token when an API requires authentication.
- `Accept`: tells the server which response format the client can understand.
- `Cookie`: sends stored cookie data from the client to the server.
- `Access-Control-Allow-Origin`: is used in CORS communication to identify allowed origins.

Where and why I used them:
- During registration, `Content-Type` helps the backend understand the submitted form data and uploaded files.
- The Express and CORS configuration uses headers to allow the client and server to communicate correctly.

### 6) HTTP Methods

HTTP methods describe the action the client wants the server to perform.

- `GET`: retrieves data, such as a list of videos.
- `POST`: creates new data, such as a new user or video.
- `PUT`: replaces an existing resource.
- `PATCH`: updates part of an existing resource.
- `DELETE`: removes a resource.

Where and why I used them:
- I used `POST` for the registration API because registration creates a new user in the database.
- Other methods will be used for reading, updating, and deleting users or videos as more API routes are added.

### 7) HTTP Status Codes

HTTP status codes tell the client whether a request succeeded or failed.

- `2xx` means success.
  - `200 OK`: the request completed successfully.
  - `201 Created`: a new resource was created successfully.
- `4xx` means there is a client-side problem.
  - `400 Bad Request`: the submitted data is invalid or incomplete.
  - `401 Unauthorized`: authentication is required or invalid.
  - `404 Not Found`: the requested resource does not exist.
- `5xx` means there is a server-side problem.
  - `500 Internal Server Error`: an unexpected error occurred on the server.

Where and why I used them:
- The registration controller uses status codes to tell Thunder Client whether registration succeeded or why it failed.
- For example, successful user creation can return `201 Created`, while missing required fields can return `400 Bad Request`.

### 8) Testing with Thunder Client

Thunder Client is a VS Code extension used to send HTTP requests and inspect API responses without building a frontend first.

I tested the registration endpoint by sending a `POST` request to:

```text
http://localhost:8000/api/v1/users/register
```

Why it is used:
- It helps verify that the route, controller, validation, password hashing, database connection, and response format work correctly.
- It also makes it easier to inspect the returned status code and response data while developing the backend.

In this test:
- The request sends the required user information and, when needed, profile files.
- The backend validates the request, hashes the password, uploads media, creates the user document, and returns a response.
- Thunder Client displays the response so I can confirm whether the registration process succeeded.

## Phase 5

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