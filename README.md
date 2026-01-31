# Assignment 4 — Travel Booking System

## About the Project
This project was created for **Assignment 4**.

The main purpose of the assignment is to build a backend application using a **clean MVC architecture**, add **authentication**, and protect API resources using **Role-Based Access Control (RBAC)** with **JWT**.

The project represents a simple **Travel Booking System** where users can view available trips, and administrators can manage travel data.

---

## Project Structure
The application is organized following the **Model–View–Controller** pattern.

assig4_web2/
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   ├── Trip.js
│   └── Booking.js
├── controllers/
│   ├── authController.js
│   ├── tripController.js
│   └── bookingController.js
├── routes/
│   ├── authRoutes.js
│   ├── tripRoutes.js
│   └── bookingRoutes.js
├── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
├── frontend/
│   ├── auth.html
│   ├── trips.html
│   ├── style.css
│   ├── auth.js
│   └── trips.js
├── server.js
├── .env
└── README.md

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
```bash
npm install

2. Configure environment variables

Create a .env file:

MONGO_URI=mongodb+srv://assig4user:assig4pass123@tasks.lw2cq6t.mongodb.net/?appName=Tasks
JWT_SECRET=supersecret

3. Start the server

node server.js

4. Open in browser

http://localhost:3000


⸻

API Testing (Postman)

All API endpoints were tested using Postman.

Screenshots demonstrating:
	•	Successful user registration and login
	•	Access restrictions for regular users
	•	Successful admin CRUD operations

will be added below.

Postman Screenshots
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 47 55" src="https://github.com/user-attachments/assets/aebb4178-7675-4f91-9960-3c5d899f0866" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 51 49" src="https://github.com/user-attachments/assets/ef75f610-6074-4ce7-84dc-4e55af9d19b0" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 52 07" src="https://github.com/user-attachments/assets/4e8d3365-10ae-4a57-a028-3d18d654caf4" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 52 20" src="https://github.com/user-attachments/assets/41368ab0-2e85-40a6-8d2c-8bd151ba15bb" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 52 33" src="https://github.com/user-attachments/assets/b9a97953-9cff-47c4-ab1a-148721c47c04" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 52 46" src="https://github.com/user-attachments/assets/87de7dbf-9170-4338-bbe5-74f169bf606a" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 53 00" src="https://github.com/user-attachments/assets/04ba3bde-5c2d-4f2e-9ffb-a701bc5e8bda" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-31 в 17 53 13" src="https://github.com/user-attachments/assets/97ff5374-f5e0-438a-bd4c-95acaa3534ba" />



⸻

Assignment Requirements Coverage
	•	MVC architecture implemented
	•	Two related objects with CRUD operations
	•	Password hashing using bcrypt
	•	JWT authentication
	•	Role-Based Access Control (RBAC)
	•	Simple frontend integration

⸻
