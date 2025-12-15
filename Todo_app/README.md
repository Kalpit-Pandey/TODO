# React Todo App (Frontend Trial Task)

This project is a **simple React Todo application** developed as part of a **Frontend Intern Trial Task**. The main goal of this project was to demonstrate understanding of **React basics, routing, state management, and CRUD operations** without using a backend.

The application allows users to manage todos with image upload support, using **localStorage** as mock storage.

---

## ✨ Features

* Create a Todo with:

  * Title (required)
  * Description (optional)
  * Status (pending / completed)
  * Image upload
* View all Todos in a list/card format
* Edit existing Todos (including updating the image)
* Delete Todos with confirmation
* Visual status indicator (pending / completed)
* Client-side routing using React Router
* Data persistence using browser localStorage

---

## 🧰 Technologies Used

* **React (Vite)**
* **React Router DOM**
* **JavaScript (ES6)**
* **CSS (plain CSS for basic styling)**
* **localStorage** for mock data handling

---

## 🧭 Application Routes

* `/todos` → Displays all todos
* `/todos/create` → Create a new todo
* `/todos/:id/edit` → Edit an existing todo

---

## ⚙️ How to Run the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 📝 Approach & Notes

* No backend was used, as required by the task
* All data is stored in **localStorage**, managed through a small service file
* Images are stored as **Base64 data URLs**
* Functional components and React hooks (`useState`, `useEffect`) are used throughout the project
* The focus was on writing **clear, readable code** and keeping the structure simple

---