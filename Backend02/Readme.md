# Frontend and Backend Connection Learning

## Backend Setup

First, I created the server using **Express**.

- I created static `code` data on the server, including `id`, `title`, and `content`.
- I selected port **3000** for the server.
- I started the backend server using:

```bash
npm start
```

## Frontend Setup

Next, I created the `frontend` folder to learn how to connect the frontend and backend.

- I used **React** as the framework.
- I used **JavaScript** as the language.

At first, I created a normal page with my name to check whether the initial setup was working correctly.

## Fetching Code Data

Then, I created a way to see the code length.

- I used `useState` to create the `codes` variable as an array.
- I used `useEffect` to create a function that gets `code` data from the backend server.
- I used **Axios** to make HTTP requests: `GET` *(used currently)*, `POST`, `PUT`, and `DELETE`.

## Axios

Axios helps React communicate with the backend or external APIs. It makes data fetching, error handling, and authentication much easier than using `fetch` directly.

### Why Axios Is Useful in React

- **Simpler syntax:** Cleaner than `fetch` and requires less boilerplate.
- **Automatic JSON handling:** Converts responses to JSON automatically.
- **Error handling:** Includes built-in `.catch()` for request failures.
- **Request/response interceptors:** Useful for adding authentication tokens or logging.
- **Supports older browsers:** More consistent than `fetch`.

## Proxy Setup

I also learned about a proxy, which works as a middleman between the frontend and backend. It helps requests reach the correct routes, especially when the frontend and backend run on different ports, such as React on `http://localhost:5173` and Express on `http://localhost:3000`.

Since I am using Vite, I added a proxy inside `vite.config.js` under `server`. This means I do not have to write the full localhost URL, such as `http://localhost:PORT/xyz`.

Whenever I use `/api` in the code, the proxy detects it and automatically adds the backend URL before it. For example:

```text
/api/login
```

becomes:

```text
http://localhost:PORT/xyz/api/login
```

### Why a Proxy Is Needed

- **CORS issues:** Browsers block requests from one origin to another *(Cross-Origin Resource Sharing)*. A proxy helps bypass this.
- **Simplifies API calls:** Instead of writing `http://localhost:3000/api/users`, I can use `/api/users` in React.
- **Security:** Hides backend URLs from the frontend code.
- **Convenience:** Keeps frontend code clean and portable.

## Running the Frontend

Start the frontend development server using:

```bash
npm run dev
```
