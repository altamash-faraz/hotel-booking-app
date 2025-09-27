# 🏨✨ MernHolidays - Luxury Hotel Booking Platform

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

**🌟 A modern, full-stack hotel booking platform built with the MERN stack 🌟**

[🚀 Live Demo](#) | [� Documentation](#quick-start-guide) | [🐛 Report Bug](https://github.com/altamash-faraz/hotel-booking-app/issues) | [💡 Feature Request](https://github.com/altamash-faraz/hotel-booking-app/issues)

</div>

---

## 🌍 About MernHolidays

> **✨ Your gateway to unforgettable stays around the world!** 

MernHolidays is a premium hotel booking platform that combines modern web technologies with an elegant, user-friendly design. Built with luxury and functionality in mind, it offers travelers a seamless experience from search to booking confirmation.

### 🎯 **What Makes Us Special**
- 🏆 **Luxury Design** - Sophisticated UI with warm gold and ocean blue themes
- ⚡ **Lightning Fast** - Built with modern React and optimized for performance  
- 🔒 **Secure Payments** - Integrated Stripe payment processing
- 📱 **Fully Responsive** - Beautiful on all devices
- 🌐 **Real-time Search** - Instant hotel availability and pricing

---

## 🛠️ Tech Stack

<details>
<summary>🎨 <strong>Frontend Technologies</strong></summary>

- **⚛️ React 18** - Modern component-based UI library
- **🔷 TypeScript** - Type-safe development experience
- **⚡ Vite** - Next-generation frontend build tool
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

---

## 🧪 Testing

### 🎭 **End-to-End Testing with Playwright**

1. **🗄️ Setup Test Database**
   - Create a separate MongoDB database for testing
   - Update the `MONGODB_CONNECTION_STRING` in `.env.e2e`

2. **📊 Import Test Data**
   - Import test data from the `data/` folder into your test database
   - Test user credentials: `1@1.com` / `password123`

3. **🧪 Run Tests**
   ```bash
   cd e2e-tests
   npm install
   npm run test
   ```

4. **🔍 View Test Reports**
   ```bash
   npm run test:ui  # Interactive UI mode
   npm run show-report  # HTML report
   ```

---

## 📸 Screenshots

<div align="center">

### 🏠 Homepage
*Beautiful hero section with smart search functionality*

### 🔍 Search Results  
*Elegant hotel listings with advanced filtering*

### 🏨 Hotel Details
*Stunning image galleries and comprehensive information*

### 💳 Booking Flow
*Seamless checkout with Stripe integration*

</div>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit your changes** (`git commit -m '✨ Add AmazingFeature'`)
4. **📤 Push to the branch** (`git push origin feature/AmazingFeature`)
5. **🔄 Open a Pull Request**

### 🐛 **Bug Reports**
Found a bug? Please open an [issue](https://github.com/altamash-faraz/hotel-booking-app/issues) with:
- 📝 Detailed description
- 🔄 Steps to reproduce
- 📊 Expected vs actual behavior
- 🖼️ Screenshots (if applicable)

### 💡 **Feature Requests**
Have an idea? We'd love to hear it! Open an [issue](https://github.com/altamash-faraz/hotel-booking-app/issues) with:
- 📋 Feature description
- 🎯 Use case explanation  
- 📈 Potential impact

---

## 📋 Roadmap

### 🔜 **Coming Soon**
- 🌟 **Hotel Reviews & Ratings** - User feedback system
- 📧 **Email Notifications** - Booking confirmations and reminders  
- 🏆 **Loyalty Program** - Points and rewards system
- 🌍 **Multi-language Support** - International accessibility
- 📱 **Progressive Web App** - Mobile app experience
- 🤖 **AI Recommendations** - Personalized hotel suggestions

### 🚀 **Future Vision**
- 📲 **Native Mobile Apps** - iOS and Android applications
- 🗺️ **Interactive Maps** - Location-based discovery
- 💬 **Live Chat Support** - Real-time customer service
- 📊 **Analytics Dashboard** - Business intelligence tools
- 🌐 **Multi-currency Support** - Global payment options

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Altamash Faraz** 
- 🌐 GitHub: [@altamash-faraz](https://github.com/altamash-faraz)
- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 💼 LinkedIn: [Your LinkedIn Profile](#)

---

## 🙏 Acknowledgments

- 💙 **React Team** - For the amazing React ecosystem
- 🎨 **Tailwind CSS** - For the beautiful utility-first CSS framework
- 🍃 **MongoDB** - For the flexible NoSQL database
- 💳 **Stripe** - For secure payment processing
- 🧪 **Playwright** - For reliable end-to-end testing
- 🌟 **Open Source Community** - For inspiration and endless learning

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

**🚀 Happy Coding! 🚀**

*Made with ❤️ and lots of ☕*

</div>


