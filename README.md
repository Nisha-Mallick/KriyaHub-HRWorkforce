<div align="center">

# 🚀 KriyaHub HR Workforce

### Modern Human Resource Management System (HRMS)

*A scalable, secure and enterprise-grade HR management platform built for the Odoo Hackathon.*

---

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql)
![BetterAuth](https://img.shields.io/badge/Auth-BetterAuth-7B3FE4?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=for-the-badge&logo=tailwind-css)

</div>

---

# 📖 Overview

**KriyaHub HR Workforce** is a modern Human Resource Management System developed as a solution for the **Odoo Hackathon**.

The application digitizes employee management by providing an intuitive interface for HR officers, administrators, and employees to manage their daily workflow efficiently.

The system emphasizes:

- Clean User Experience
- Secure Authentication
- Modular Architecture
- Scalable Backend
- Enterprise-level Code Structure
- High Performance
- Maintainability

---

# 🎯 Problem Statement

The objective was to build a modern HRMS capable of managing:

- Employee Directory
- Authentication
- Employee Profiles
- Attendance Management
- Leave Management
- Salary Structure
- Payroll Information
- Role-based Access Control
- Company Management

while following enterprise software engineering standards.

---

# ✨ Features

## 🔐 Authentication

- BetterAuth Session Authentication
- Secure Login
- Secure Signup
- Forgot Password
- Change Password
- Session Management
- Protected Routes

---

## 👥 Employee Management

- Employee Directory
- Employee Cards
- Search Employees
- Employee Profile
- Resume Information
- Private Information
- Skills
- Certifications
- Profile Picture

---

## 🏢 Company Management

- Company Registration
- Company Logo Upload
- Company Information

---

## 📅 Attendance

- Daily Check In
- Daily Check Out
- Working Hours Calculation
- Extra Hours Calculation
- Attendance History
- Attendance Dashboard
- Admin Attendance View

---

## 🌴 Leave Management

- Leave Balance
- Paid Leave
- Sick Leave
- Leave Request
- Leave Approval
- Leave Rejection
- Leave Status Tracking

---

## 💰 Payroll

- Monthly Salary
- Yearly Salary
- Salary Components
- Salary Structure
- Salary Deductions
- Payroll Summary

---

## 👨‍💼 Admin Features

- Employee Management
- Attendance Monitoring
- Leave Approval
- Payroll Management
- Employee Creation
- Company Administration

---

## 👨‍💻 Employee Features

- Personal Dashboard
- Attendance
- Leave Requests
- Profile Management
- Salary Information
- Personal Details

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Router DOM
- Axios
- Lucide React

---

## Backend

- Node.js
- Express.js
- BetterAuth
- MySQL2
- Multer
- Zod Validation
- Helmet
- Cookie Parser
- CORS
- Express Rate Limit

---

## Database

- MySQL

---

# 📂 Project Structure

```
KriyaHub-HRWorkforce
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── hooks
│   │   ├── services
│   │   ├── context
│   │   ├── routes
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── services
│   ├── models
│   ├── database
│   ├── uploads
│   ├── utils
│   └── index.js
│
└── README.md
```

---

# 🗄 Database Design

The backend follows a normalized relational database design.

### Core Tables

- Companies
- Users
- Employees
- Attendance
- Leave Types
- Leave Requests
- Leave Balances
- Salary Structures
- Salary Components
- Skills
- Certifications
- Private Information
- Sessions

The schema is designed with scalability, data consistency, and role-based access in mind.

---

# 🔒 Security

The application follows several security best practices:

- Session-based Authentication
- Password Hashing
- Role-based Authorization
- Input Validation (Zod)
- SQL Parameterized Queries
- Helmet Security Headers
- Rate Limiting
- Secure Cookies
- CORS Configuration
- File Upload Validation

---

# ⚙️ Backend Architecture

The backend follows a layered architecture:

```
Routes
      ↓
Controllers
      ↓
Services
      ↓
Models
      ↓
MySQL Database
```

This separation improves:

- Maintainability
- Scalability
- Testing
- Readability

---

# 🎨 Frontend Design Principles

The frontend was designed with a focus on:

- Clean Enterprise UI
- Responsive Design
- Accessibility
- Reusable Components
- Consistent Color Palette
- Modern Dashboard Experience
- Modular Component Architecture

---

# 📱 Responsive Design

The application supports:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/KriyaHub-HRWorkforce.git
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd server
npm install
```

---

## Configure Environment

Create `.env` files for both frontend and backend.

### Backend

```
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=kriyahub_hr

BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:5000
```

### Frontend

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Import Database

```sql
schema.sql
seed.sql
```

---

## Start Backend

```bash
npm run dev
```

---

## Start Frontend

```bash
npm run dev
```

---

# 📊 Evaluation Criteria Addressed

This project was developed while keeping the Odoo Hackathon evaluation criteria in mind.

✅ Clean Code Standards

✅ Modular Architecture

✅ Scalable Design

✅ Database Design

✅ Secure Authentication

✅ Performance Optimization

✅ Usability

✅ Responsive UI

✅ Debugging-Friendly Structure

✅ Maintainable Codebase

---

# 👥 Team Collaboration

The project was developed collaboratively using Git and GitHub following a feature-branch workflow.

Workflow followed:

- Feature Branches
- Pull Requests
- Code Reviews
- Merge Strategy
- Modular Development
- Version Control Best Practices

---

# 🌟 Future Improvements

- Email Notifications
- Payroll Generation
- Analytics Dashboard
- Calendar Integration
- Document Management
- Role Permission Management
- Audit Logs
- Multi-Company Support
- Employee Performance Tracking

---

# 🙏 Acknowledgements

Built as part of the **Odoo Hackathon**.

Special thanks to the organizers for providing a real-world enterprise software problem statement that encouraged us to design a scalable HRMS with modern software engineering practices.

---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a star.
</div>
