# Assignment 4 — Travel Booking System

## About the Project
This project was created for **Assignment 4**.

The main purpose of the assignment is to build a backend application using a **clean MVC architecture**, add **authentication**, and protect API resources using **Role-Based Access Control (RBAC)** with **JWT**.

The project represents a simple **Travel Booking System** where users can view available trips, and administrators can manage travel data.

---

## Project Structure
The application is organized following the **Model–View–Controller** pattern.

```
assig4_web2/
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Trip.js
│   └── Booking.js
│
├── controllers/
│   ├── authController.js
│   ├── tripController.js
│   └── bookingController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── tripRoutes.js
│   └── bookingRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
│
├── frontend/
│   ├── auth.html
│   ├── trips.html
│   ├── style.css
│   ├── auth.js
│   └── trips.js
│
├── server.js
└── .env

```
---

## Main Objects

### Trip 
Represents a travel tour.

**Fields:**
- title
- destination
- duration
- price
- description

**API endpoints:**
- GET `/trips` — public access
- POST `/trips` — admin only
- PUT `/trips/:id` — admin only
- DELETE `/trips/:id` — admin only

---

### Booking 
Represents a booking made by a user for a specific trip.

**Fields:**
- userId 
- tripId 
- date
- status

**API endpoints:**
- POST `/bookings` — authenticated users
- GET `/bookings` — admin only
- DELETE `/bookings/:id` — admin only

---

## Authentication and Authorization

The application includes a secure user system.

Each user has:
- email
- password (stored as a hashed value)
- role (`user` or `admin`)

### Security Implementation
- Passwords are hashed using **bcrypt**
- Authentication is implemented using **JWT**
- Protected routes require a valid token
- Access control is enforced using middleware

---

## Frontend
A simple frontend is included to demonstrate interaction with the backend API.

- Built using **HTML, CSS, and JavaScript**
- Separate pages for authentication and trips
- Blue-themed user interface
- JWT token is stored in `localStorage`
- Frontend is served using `express.static`

### Pages
- `/` — redirects to login page
- `/auth.html` — registration and login
- `/trips.html` — list of available trips

---

## How to Run the Project

### 1. Install dependencies
```
npm install

2. Configure environment variables

Create a .env file:

MONGO_URI=mongodb+srv://assig4user:assig4pass123@tasks.lw2cq6t.mongodb.net/?appName=Tasks
JWT_SECRET=supersecret

3. Start the server

node server.js

4. Open in browser

http://localhost:3000

```
⸻

API Testing (Postman)

All API endpoints were tested using Postman.

Screenshots demonstrating:
	•	Successful user registration and login
	•	Access restrictions for regular users
	•	Successful admin CRUD operations

will be added below.

Postman Screenshots
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/64548094-f29a-40ae-9f59-c3df5be7aae7" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/a3767f19-6bac-49f9-a438-c764b9fbba21" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/24c14c8b-39c6-40e0-8d59-d394bd51197f" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/492964f9-63c3-4f5b-b76c-80524da79635" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/7584ca65-7237-4b36-ba11-c5b2e15cb048" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/8c501f3d-ff15-4a8c-8ea4-98600773186d" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/64a0c449-7305-4428-8070-ab0cda28859e" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/b6f55098-1142-4764-bdbc-472381325306" />



⸻

Assignment Requirements Coverage
	•	MVC architecture implemented
	•	Two related objects with CRUD operations
	•	Password hashing using bcrypt
	•	JWT authentication
	•	Role-Based Access Control (RBAC)
	•	Simple frontend integration

⸻
