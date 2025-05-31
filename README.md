# Book Management System

## Project Title

**Book Management System**

---

## Short Description

The Book Management System is a web application for managing a digital library. It allows users to add, view, edit, filter, and delete books online. The project demonstrates the use of the MVC architecture with Node.js, server-side rendering using EJS, and MongoDB for persistent storage.

---

## Features

- Add new books (title, author, year, genre)
- Edit existing books
- Delete books from the catalog
- View and browse the entire collection
- Filter and search books by title, author, or genre

---

## How to Run the Application

### Requirements

- Node.js
- Access to a MongoDB database (e.g., MongoDB Atlas)

### Setup and Running

1. **Clone the repository**
    ```bash
    git clone https://github.com/buivol16/book-management-system.git
    cd book-management-system
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    - All the necessary environment variables are contained in the `.env` file

4. **Start the application**
    ```bash
    npm start
    ```
    - The app will be running at [http://localhost:3000](http://localhost:3000)

---

## External Libraries Used

- [express](https://www.npmjs.com/package/express) — Web framework for Node.js
- [ejs](https://www.npmjs.com/package/ejs) — Template engine for server-side rendering
- [mongodb](https://www.npmjs.com/package/mongodb) — Official MongoDB driver
- [dotenv](https://www.npmjs.com/package/dotenv) — For environment variable management
- [bootstrap](https://getbootstrap.com/) — CSS framework (via CDN)

---

## Application Structure

```
/ (project root)
├── app.js # Main server file
├── /controllers # Route and business logic
│ └── booksController.js
├── /models # Database interaction logic
│ └── book.js
├── /views # EJS templates
│ ├── /books # Book list and forms
│ └── /partials # Header and footer partials
├── /public # Static files
│ └── style.css
├── .env # Environment variables (MongoDB URL AND PORT)
├── package.json # Project config and dependencies
└── README.md
```


- **models/book.js** — CRUD operations on books in MongoDB
- **controllers/booksController.js** — Handles all book routes (list, add, edit, delete, filter)
- **views/** — EJS templates for book list, forms, and layout
- **public/** — Custom CSS (Bootstrap is loaded via CDN)
