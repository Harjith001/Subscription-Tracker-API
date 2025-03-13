# Subscription Tracker API

## 📖 Overview
Subscription Tracker API is a **Node.js** and **Express.js** based REST API that helps users track and manage their subscriptions efficiently. It provides functionalities such as user authentication, subscription management, and analytics.

## 🚀 Features
- **User Authentication** (Signup/Login with JWT)
- **CRUD Operations for Subscriptions**
- **Track Subscription Status & Expiry**
- **User Management (Admin & User Roles)**
- **Secure Password Storage with Bcrypt**
- **MongoDB Integration with Mongoose**

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens), Bcrypt
- **Error Handling**: Express Middleware
- **API Documentation**: Postman / Swagger (optional)

---

## ⚙️ Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/Harjith001/Subscription-Tracker-API.git
cd Subscription-Tracker-API
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ **Run the Server**
```sh
npm start
```
or (for development mode with auto-restart)
```sh
npm run dev
```
The API will be running at: **`http://localhost:5000`**

---

## 📌 API Endpoints

### 🔐 **Authentication**
- **POST /api/auth/register** → User Registration
- **POST /api/auth/login** → User Login (JWT Token)

### 👤 **User Management**
- **GET /api/users** → Get All Users (Admin Only)
- **GET /api/users/:id** → Get a Single User (Excluding Password)

### 🔔 **Subscription Management**
- **POST /api/subscriptions** → Add a Subscription
- **GET /api/subscriptions** → Get All Subscriptions
- **GET /api/subscriptions/:id** → Get Subscription by ID
- **PUT /api/subscriptions/:id** → Update Subscription
- **DELETE /api/subscriptions/:id** → Delete Subscription

---

## 🛡️ Authentication & Security
- **JWT-based Authentication** for secure access.
- **Password Hashing** using Bcrypt for enhanced security.
- **Middleware for Protected Routes** to ensure authorized access.

---

## 📂 Project Structure
```
Subscription-Tracker-API/
│-- models/         # Mongoose models (User, Subscription)
│-- routes/         # API routes
│-- controllers/    # Business logic for each route
│-- middleware/     # Authentication and error handling
│-- config/         # Database configuration
│-- server.js       # Entry point
│-- package.json    # Dependencies and scripts
│-- .env            # Environment variables
```

---

## 📝 Contributing
Feel free to fork this repo, create a branch, and submit a pull request. Contributions are always welcome!

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📧 Contact
For any queries, reach out to me at **[your.email@example.com](mailto:your.email@example.com)**.

---

🔹 **Happy Coding!** 🚀
