# Phase 3: Express APIs and Data Models

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