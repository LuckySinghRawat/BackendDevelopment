# Phase 4: Media Uploads and HTTP Fundamentals

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