# Prescripto - Doctor Appointment Booking System

A full-stack MERN web application that connects patients with qualified doctors for seamless appointment booking, virtual consultations, and medicine ordering.

## Features

### Patient
- Register and login securely
- Browse doctors by speciality
- Book and cancel appointments
- View appointment history
- Update profile and upload profile picture
- Chat with AI assistant (Gemini)
- Order medicines from the store

### Doctor
- Dedicated doctor dashboard
- View and manage appointments
- Mark appointments as completed or cancelled
- Update profile and availability

### Admin
- Add and manage doctors
- View all appointments
- Cancel any appointment
- Dashboard with key statistics

## Tech Stack

- Frontend: React.js, Tailwind CSS, Axios, React Router
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT, Bcrypt.js
- File Upload: Multer, Cloudinary
- AI Chat: Google Gemini API
- Payment: Razorpay

## Installation

### 1. Clone the repository
cd Doctor_AppointmentSystem

### 2. Backend setup
cd backend
npm install
node server.js

### 3. Frontend setup
cd frontend
npm install
npm run dev

### 4. Admin panel setup
cd admin
npm install
npm run dev

## Environment Variables

### Backend .env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=your_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
GEMINI_API_KEY=your_gemini_api_key
CURRENCY=INR

### Frontend and Admin .env
VITE_BACKEND_URL=http://localhost:4000

## Running the Project

Terminal 1 - cd backend and node server.js - runs on port 4000
Terminal 2 - cd frontend and npm run dev - runs on http://localhost:5173
Terminal 3 - cd admin and npm run dev - runs on http://localhost:5174

## Admin Login

Email: admin@gmail.com
Password: admin123

## Future Improvements

- Video consultation integration
- Email and SMS notifications
- Analytics dashboard
- Mobile app React Native
- Insurance and billing management

## Author

Vikas Thatikonda
Built as a collaborative full-stack project
Contributions: Frontend UI, Admin Panel, Bug fixes, Deployment setup

## License

This project is for educational and portfolio purposes.
