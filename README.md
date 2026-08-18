# Node.js Backend Training Plan — 12 Days

**Priority order:** Node.js core → Express → MongoDB glimpse → Full-stack (frontend–backend) integration project

---

## Day 1 — Node.js Foundations & Environment Setup

- What is Node.js, why backend devs use it, V8 engine basics
- Node vs browser JS — what's different (no DOM, global object, modules)
- Installing Node & npm, `node -v`, `npm -v`, using a version manager (nvm) briefly
- REPL vs running a `.js` file
- npm basics: `package.json`, `npm init`, installing packages, `dependencies` vs `devDependencies`
- The event loop — conceptual overview (single-threaded, non-blocking I/O)

---

## Day 2 — Core Modules & Async Programming (Part 1)

- Built-in modules: `fs`, `path`, `os`, `events`
- Reading/writing files (sync vs async methods)
- CommonJS `require`/`module.exports` vs ES Modules `import/export`
- Callbacks — how they work, callback hell problem (with example)

---

## Day 3 — Async Programming (Part 2): Promises & Async/Await

- Promises — creation, `.then/.catch/.finally`
- `async/await` syntax, converting callback code to async/await
- Error handling with `try/catch`
- `Promise.all`, `Promise.allSettled` (brief)

---

## Day 4 — Building a Server with Core HTTP Module + REST Basics

- `http` module — creating a basic server, handling requests/responses
- HTTP methods (GET, POST, PUT, DELETE), status codes, headers
- What is REST? Resource-based URL design, statelessness
- Why we use frameworks instead of raw `http` (motivation for Express)

---

## Day 5 — Express.js Basics

- Installing Express, setting up an app
- Routing (`app.get/post/put/delete`), route parameters, query params
- Middleware concept — what it is, `app.use()`, built-in middleware (`express.json()`)
- Serving static files
- Project folder structure best practices (routes/controllers/models)

---

## Day 6 — Express Advanced: Building a Real REST API

- Full CRUD API design (in-memory) — Create, Read, Update, Delete
- Custom middleware (logging, validation)
- Centralized error-handling middleware
- Input validation (`express-validator` or manual checks)
- Environment variables with `dotenv`

---

## Day 7 — MongoDB Glimpse: NoSQL Fundamentals

- SQL vs NoSQL — when/why to use MongoDB
- Documents, collections, BSON/JSON structure
- MongoDB Atlas setup (cloud, free tier) + MongoDB Compass (GUI)
- CRUD operations directly in Mongo shell/Compass (`insertOne`, `find`, `updateOne`, `deleteOne`)
- Basic query operators (`$gt`, `$in`, `$or`)

---

## Day 8 — Connecting Node.js to MongoDB with Mongoose

- Installing Mongoose, connecting to Atlas from a Node app
- Schemas & Models — defining structure, data types, validation rules
- CRUD via Mongoose (`.find()`, `.create()`, `.findByIdAndUpdate()`, `.findByIdAndDelete()`)
- Replacing the in-memory array from Day 6 with real MongoDB persistence

---

## Day 9 — Authentication & Authorization

- Password hashing with `bcrypt`
- User registration & login APIs
- JWT — what it is, generating & verifying tokens
- Protecting routes with auth middleware
- Basics of role-based access (admin vs user) — brief mention

---

## Day 10 — Project Kickoff: Frontend–Backend Integration (Core Focus Day 1)

- Recap: what "full-stack integration" actually means (client calls API, API talks to DB)
- CORS — what it is, why it errors, how to configure `cors` middleware
- Connecting a simple frontend (plain HTML/JS or React, based on class background) to the Express API using `fetch`/`axios`
- Structuring the final project: decide the domain (e.g., Task Manager / Mini E-commerce / Blog App)
- Assign project scope: entities, routes, pages needed
- API contract discussion — deciding request/response shape frontend and backend agree on

---

## Day 11 — Project Build Day: Full CRUD Integration

- Wiring up all CRUD operations end-to-end: forms on frontend → POST/PUT/DELETE → MongoDB → UI updates
- Handling loading/error states on the frontend
- Protecting frontend actions using the JWT from Day 9 (attaching token in headers, conditional UI for logged-in users)
- Testing the whole flow with Postman + browser together
- Common integration bugs: CORS, wrong content-type, mismatched field names, async race conditions

---

## Day 12 — Deployment, Polish & Wrap-Up

- Environment variables for production, `.env` best practices, not committing secrets
- Deploying backend (Render/Railway) + database (Atlas) + frontend (Vercel/Netlify)
- Basic error handling/logging polish, README documentation
- Recap of the full journey: Node core → Express → MongoDB → Auth → Integration
- Discussion: next steps (learning TypeScript, testing, Docker, microservices, GraphQL — as future directions)

---

## Documentation

- https://www.npmjs.com/
- https://nodejs.org/docs/latest/api/
