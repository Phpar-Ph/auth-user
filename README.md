# 🔐 Fullstack Auth App (Frontend + Backend)

A fullstack authentication web application built using **ReactJS** for the frontend and **Node.js + Express** for the backend, connected via REST API and secured using JWT. The frontend is styled with **Tailwind CSS**, and global state is managed via **Zustand**.

----
## 🌐 **Live Site**: [User-Authentication](https://auth-user-frontend.onrender.com)
----
## 📦 Backend Dependencies

* `express`
* `mongoose`
* `dotenv`
* `cors`
* `bcryptjs`
* `jsonwebtoken`
* `cloudinary`
* `cookie-parser`

## 📦 Frontend Dependencies

* `react`
* `react-dom`
* `react-router`
* `axios`
* `zustand`
* `tailwindcss`
* `@tailwindcss/vite`
* `lucide-react`
* `sonner`
------
## devDependencies
* `nodemon`
* `daisy UI`
---

## 🚀 Getting Started

### ✅ 1. Clone the repository

```bash
git clone https://github.com/Phpar-Ph/auth-user.git
cd auth-user
```
---
## 🔙 Backend Setup
```bash
cd backend
npm install / isntall the dependencies
```
### Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
BASE_URL=frontend_URL
NODE_ENV=development or production
```

> 🔐 Do NOT commit this `.env` file. Make sure it's in `.gitignore`.

### Start the backend server:
```bash
npm run dev : as configured in package json :  "dev": "nodemon src/server.js"
```
The backend will run at: `http://localhost:5000`
---

## ⚛️ Frontend Setup

```bash
cd frontend
npm install
```
### Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```
### Start the frontend dev server:
```bash
npm run dev
```
The frontend will run at: `http://localhost:5173`
---
## 📁 Project Structure

```
fullstack-auth-app/
├── backend/
|   |──src/
|       ├──config
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/   
│       └── server.js
|─── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   ├── constants
│   │── main.jsx
│   ├── app.jsx
│   ├── index.html
│   ├── .env
│   └── vite.config.js
```
----
## 🧪 Notes for Reviewers

* Make sure to run `npm install` in both `frontend/` and `backend/` folders
* Both apps assume default ports (`5000` for API, `5173` for frontend)
* The project uses `.env` files for configuration and expects them to be set locally
* Cloudinary is optional; configure it if you're supporting image uploads
---
## 📜 License

MIT – Feel free to use, fork, or contribute
