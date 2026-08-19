# Backend Development Notes

Here, I first learned what to install, where to install it, and why it is needed.

## Creating the Project with npm

The first command I used was `npm init`. It helped me create the `package.json` file, where I could:

- Name the project
- Choose a version
- Add a description
- Set the license
- Add the author

Then, I created an `index.js` file and wrote my first code to check whether everything was working correctly.

I also learned about **npm (Node Package Manager)**. It is the default package manager that comes with Node.js and one of the most important tools in backend development with JavaScript.

After that, I added a script to `package.json`:

```json
"start": "node index"
```

This allows me to start the application by running either `npm run start` or `npm start`.

## Installing Express

I installed Express by using either of these commands:

```bash
npm install express
# or
npm i express
```

I learned that Express is a backend web framework for Node.js.

### What Express Is

- A minimal and flexible framework for Node.js
- A tool for handling HTTP requests, routes, middleware, and responses
- Often called the *de facto standard* for Node.js backend development

I wrote the basic Express code and learned how to import Express and create a server. I also learned about the `get` and `listen` methods:

- I used `get` to create multiple pages, such as `/`, `/lucky`, and `/lucky/login`.
- I used `listen` to start the server.

## Learning About dotenv

I learned about **dotenv**, a Node.js package used to manage environment variables. I learned how to load variables from a `.env` file using `process.env.<variable>`.

This allows me to keep sensitive information, such as API keys, database passwords, and JWT secrets, outside my code. I also used dotenv to manage the `PORT` variable.

### Why Use dotenv?

- **Security:** Keeps secrets out of the source code.
- **Portability:** Allows different `.env` files for development, testing, and production.
- **Convenience:** Makes it easy to change configuration without editing the code.