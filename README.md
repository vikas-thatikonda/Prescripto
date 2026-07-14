# Prescripto

**A full-stack doctor appointment booking platform, built on the MERN stack.**

Prescripto lets patients find doctors, book and pay for appointments, and track their visit history — with a Gemini-powered assistant for quick questions and an OCR-based prescription scanner that looks up medicines from a photo. Doctors get a dashboard to manage their schedule, and admins have full control over the platform.

## Highlights

- **Appointment booking** with Razorpay checkout and full history tracking
- **AI assistant** powered by Google Gemini for in-app patient support
- **Prescription scanner** — snap a photo, and Tesseract.js (OCR) + Fuse.js (fuzzy search) match it against a medicine database
- **Three dedicated apps**: patient-facing frontend, doctor/admin panel, and a shared Express API
- **Role-based auth** with separate JWT middleware for patients, doctors, and admins

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, Tailwind CSS, React Router v7, Axios, React Toastify |
| Admin Panel | React 19, Tailwind CSS, React Router v7, Axios, React Toastify |
| Backend | Node.js, Express 5, MongoDB, Mongoose |
| Auth | JWT, Bcrypt |
| Media | Multer, Cloudinary |
| AI & Payments | Google Gemini API, Razorpay |
| Prescription OCR | Tesseract.js, Fuse.js |

## Project Structure

```
Doctor_AppointmentSystem/
├── backend/
│   ├── config/         # MongoDB & Cloudinary setup
│   ├── controllers/    # admin, doctor, user logic
│   ├── middlewares/    # auth (admin/doctor/user), multer
│   ├── models/         # appointment, doctor, user schemas
│   ├── routes/         # admin, doctor, user, gemini
│   └── server.js
├── frontend/            # patient-facing React app
└── admin/                # admin + doctor React app
```

## Prerequisites

- Node.js (v18 or later recommended)
- A MongoDB database (local or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Razorpay account (for payments)
- Google Gemini API key (for the AI assistant)

## Getting Started

```bash
git clone <your-repo-url>
cd Doctor_AppointmentSystem

# Backend — http://localhost:4000
cd backend && npm install && node server.js

# Frontend — http://localhost:5173
cd frontend && npm install && npm run dev

# Admin panel — http://localhost:5174
cd admin && npm install && npm run dev
```

### Environment Variables

**`backend/.env`**
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=your_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
GEMINI_API_KEY=your_gemini_api_key
CURRENCY=INR
```

**`frontend/.env`** and **`admin/.env`**
```env
VITE_BACKEND_URL=http://localhost:4000
```

### Demo Admin Access
```
Email: admin@gmail.com
Password: admin123
```

## API Reference

**`/api/user`**
| Method | Route | Auth |
|---|---|---|
| POST | `/register`, `/login` | — |
| GET | `/get-profile`, `/appointments` | User |
| POST | `/update-profile`, `/book-appointment`, `/cancel-appointment` | User |
| POST | `/payment-razorpay`, `/verify-payment` | User |

**`/api/doctor`**
| Method | Route | Auth |
|---|---|---|
| GET | `/list` | — |
| POST | `/login` | — |
| GET | `/appointments`, `/dashboard`, `/profile` | Doctor |
| POST | `/complete-appointment`, `/cancel-appointment`, `/update-profile` | Doctor |

**`/api/admin`**
| Method | Route | Auth |
|---|---|---|
| POST | `/login` | — |
| POST | `/add-doctor`, `/all-doctors`, `/change-availability`, `/cancel-appointment` | Admin |
| GET | `/appointments`, `/dashboard` | Admin |

**`/api/gemini`**
| Method | Route | Description |
|---|---|---|
| POST | `/chat` | Send a message to the AI assistant |

## Roadmap

- **Video consultations** — in-app calling for remote appointments
- **AI symptom checker** — extend the Gemini assistant to suggest relevant specialities before booking
- **Digital health records** — a patient-side vault for past prescriptions and visit summaries
- **Doctor ratings & reviews** — post-appointment feedback to help patients choose
- **React Native mobile app** — native iOS/Android experience

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## Author

**Vikas Thatikonda** — built as a collaborative full-stack project.
Contributions: frontend UI, admin panel, bug fixes, deployment setup.

## License

Educational and portfolio use.
