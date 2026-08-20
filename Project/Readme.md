# YouTube Clone Project

Here we are creating a YouTube clone to learn how the backend works behind the scenes.

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