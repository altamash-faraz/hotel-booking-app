# 🏨✨ MernHolidays - Luxury Hotel Booking Platform

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**🌟 A modern, full-stack hotel booking platform built with the MERN stack 🌟**
</div>
---

## 🌍 About MernHolidays

> **✨ Your gateway to unforgettable stays around the world!** 

MernHolidays is a premium hotel booking platform that combines modern web technologies with an elegant, user-friendly design. Built with luxury and functionality in mind, it offers travelers a seamless experience from search to booking confirmation.
---
## 🛠️ Tech Stack

<details>
<summary>🎨 <strong>Frontend Technologies</strong></summary>

- **⚛️ React 18** - Modern component-based UI library
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🔄 React Query** - Powerful data synchronization
- **🧭 React Router** - Declarative routing
- **📝 React Hook Form** - Performant, flexible forms
- **🗓️ React DatePicker** - Beautiful date selection

</details>

<details>
<summary>🖥️ <strong>Backend Technologies</strong></summary>

- **🚀 Node.js** - JavaScript runtime environment
- **🌐 Express.js** - Fast, minimalist web framework
- **🔷 TypeScript** - Enhanced JavaScript with types
- **🍃 MongoDB & Mongoose** - NoSQL database with ODM
- **🔐 JWT** - Secure authentication tokens
- **📁 Multer** - File upload middleware
- **🔒 bcryptjs** - Password hashing library

</details>

<details>
<summary>☁️ <strong>Cloud Services & DevOps</strong></summary>

- **🍃 MongoDB Atlas** - Cloud database hosting
- **☁️ Cloudinary** - Image & video management
- **💳 Stripe** - Payment processing platform
- **🧪 Playwright** - End-to-end testing framework
- **🔍 ESLint & Prettier** - Code quality tools
- **📦 Git** - Version control system

</details>

---

## ✨ Features & Functionality

### 🏠 **For Travelers**
- 🔍 **Smart Search** - Find hotels by destination, dates, and guest count
- 🏨 **Hotel Discovery** - Browse stunning hotel listings with detailed information
- 📅 **Real-time Booking** - Check availability and book instantly
- 💳 **Secure Payments** - Safe and encrypted payment processing
- 📱 **Responsive Design** - Perfect experience on any device
- 🔐 **Account Management** - Secure registration and profile management

### 🏢 **For Hotel Owners**
- 🏨 **Hotel Management** - Add and manage your hotel listings
- 📸 **Image Gallery** - Upload multiple high-quality images
- 📊 **Booking Insights** - Track your bookings and performance
- ✏️ **Easy Editing** - Update hotel details anytime
- 💰 **Revenue Tracking** - Monitor your earnings

### 🔒 **Security & Performance**
- 🛡️ **Authentication** - JWT-based secure user sessions
- 🔐 **Data Protection** - Encrypted sensitive information
- ⚡ **Optimized Performance** - Fast loading times and smooth interactions
- 🧪 **Thoroughly Tested** - Comprehensive E2E testing coverage
- 📱 **Mobile Optimized** - Lightning-fast mobile experience

---

## 🎨 Design Philosophy

Our luxury hotel booking platform features a sophisticated design system:

### � **Color Palette**
- **🟡 Hotel Gold** - Warmth, luxury, and premium feel
- **🔵 Ocean Blue** - Trust, reliability, and calm
- **🟠 Sunset Orange** - Energy and excitement  
- **🟢 Forest Green** - Success and nature connection
- **⚫ Luxury Grays** - Sophistication and elegance

### ✨ **Visual Elements**
- 🌅 Beautiful gradient backgrounds
- � Glass-morphism effects
- 🎭 Smooth hover animations
- 💎 Luxury shadow system
- � Mobile-first responsive design

---

## 📊 Project Statistics

<div align="center">

| 📈 Metric | 📊 Value |
|-----------|----------|
| 📁 **Total Files** | 50+ components |
| 🔗 **API Endpoints** | 15+ REST APIs |
| 🗄️ **Database Models** | Users, Hotels, Bookings |
| 🧪 **Test Coverage** | E2E with Playwright |
| 🎨 **UI Components** | 20+ reusable components |
| 📱 **Responsive Breakpoints** | 5 device sizes |

</div>

---

## 🚀 Quick Start Guide

### 📋 Prerequisites

Make sure you have these installed on your machine:

- 📦 **Node.js** (v16 or higher)
- 🌐 **npm** or **yarn**
- 🍃 **MongoDB** account
- ☁️ **Cloudinary** account  
- 💳 **Stripe** account

### 🔥 Getting Started

1. **📥 Clone the Repository**
   ```bash
   git clone https://github.com/altamash-faraz/hotel-booking-app.git
   cd hotel-booking-app
   ```
```

2. **🔧 Backend Configuration**

   Navigate to the `backend` folder and create your environment files:
   
   ```bash
   cd backend
   cp .env.example .env
   cp .env.example .env.e2e
   ```
   
   Add the following to both `.env` and `.env.e2e`:
   ```env
   # 🗄️ Database Configuration
   MONGODB_CONNECTION_STRING=your_mongodb_connection_string
   
   # 🔐 Security
   JWT_SECRET_KEY=your_super_secret_jwt_key
   FRONTEND_URL=http://localhost:5173
   
   # 🖼️ Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # 💳 Stripe Configuration
   STRIPE_API_KEY=your_stripe_secret_key
   ```

3. **🎨 Frontend Configuration**

   Navigate to the `frontend` folder and create your environment file:
   
   ```bash
   cd ../frontend
   touch .env
   ```
   
   Add the following to `.env`:
   ```env
   # 🌐 API Configuration
   VITE_API_BASE_URL=http://localhost:7000
   
   # 💳 Stripe Public Key
   VITE_STRIPE_PUB_KEY=your_stripe_publishable_key
   ```

4. **🚀 Install Dependencies & Run**

   ```bash
   # 🖥️ Backend Setup
   cd backend
   npm install
   npm run dev
   
   # 🎨 Frontend Setup (in new terminal)
   cd frontend
   npm install
   npm run dev
   ```

5. **🌐 Access the Application**
   - 🎨 **Frontend**: http://localhost:5173
   - 🖥️ **Backend API**: http://localhost:7000

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

**🚀 Happy Coding! 🚀**

*Made with ❤️ and lots of ☕*

</div>


