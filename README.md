# 🏨 MERN Booking App - Full Stack Hotel Booking Platform

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **🚧 Currently Under Development** - This is my ongoing project to build a comprehensive hotel booking platform using the MERN stack.

## 📋 Project Overview

This is a full-featured hotel booking application that I'm actively developing to showcase modern web development skills. The project includes user authentication, hotel listings, booking management, payment processing, and comprehensive testing.

## 🛠️ Tech Stack

### **Frontend**
- **React 18** with **TypeScript** for type-safe component development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive, modern UI design
- **React Query** for efficient server state management

### **Backend**
- **Node.js** with **Express.js** framework
- **TypeScript** for type-safe server-side development
- **JWT** for secure authentication
- **Mongoose** for MongoDB object modeling

### **Database & Services**
- **MongoDB Atlas** for cloud database storage
- **Cloudinary** for image upload and optimization
- **Stripe** for secure payment processing

### **Testing & DevOps**
- **Playwright** for end-to-end testing
- **ESLint** & **Prettier** for code quality
- **Git** for version control

## ✨ Current Features

- ✅ **User Management**
  - User registration and authentication
  - JWT-based secure sessions
  - Profile management

- ✅ **Hotel Management**
  - Hotel creation and editing
  - Multi-image upload with Cloudinary
  - Advanced search and filtering
  - Location-based search

- ✅ **Booking System**
  - Real-time availability checking
  - Secure booking creation
  - Booking history and management

- ✅ **Payment Integration**
  - Stripe payment processing
  - Test and production environments
  - Secure payment handling

- ✅ **Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Modern UI/UX patterns

## 🎯 Planned Enhancements

- 🔄 **Admin Dashboard** - Comprehensive management interface
- 🔄 **Advanced Filters** - Price range, amenities, ratings
- 🔄 **Review System** - User ratings and reviews
- 🔄 **Notification System** - Email confirmations and reminders
- 🔄 **Mobile App** - React Native implementation
- 🔄 **Performance Optimization** - Caching and lazy loading
- 🔄 **Multi-language Support** - Internationalization (i18n)

## 📊 Project Stats

- **Languages**: TypeScript, JavaScript, CSS
- **Total Files**: 50+ components and modules
- **Database Collections**: Users, Hotels, Bookings
- **API Endpoints**: 15+ REST endpoints
- **Test Coverage**: E2E tests with Playwright

---

## 🚀 Quick Start Guide

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/chrisblakely01/mern-booking-app.git
cd mern-booking-app
```

## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create two files: `.env` and `.env.e2e`. Add the following contents to both files:

    ```plaintext
    MONGODB_CONNECTION_STRING=

    JWT_SECRET_KEY=
    FRONTEND_URL=

    # Cloudinary Variables
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    STRIPE_API_KEY=
    ```

2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.
    - For the `.env.e2e` setup see "running automated tests" below

3. **Cloudinary Setup**:
    - Create an account at [Cloudinary](https://cloudinary.com/).
    - Navigate to your dashboard to find your cloud name, API key, and API secret.
    - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.

4. **Stripe Setup**:
    - Sign up for a Stripe account at [Stripe](https://stripe.com/).
    - Find your API keys in the Stripe dashboard.
    - Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.
  
5. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

7. **Frontend URL**:
    - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:3000` if you're running it locally).
  

## Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

    ```plaintext
    VITE_API_BASE_URL=
    VITE_STRIPE_PUB_KEY=
    ```

5. **VITE_API_BASE_URLL**:
    - The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:7000` if you're running it locally).

## Running the Application

1. **Backend**:
    - Navigate to the `backend` directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal  


## Running Automated Tests

1. **MongoDB Setup**: 
    - You will ideally want to create a new mongoDb database for your tests to run against. This is to keep the data stable 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new project (e.g e2e tests)
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env.e2e` file.
      
2. **Importing Test Data into MongoDB**:

    - The repository contains a `data` folder at the root, which includes JSON files for a test user and a test hotel. You can import these into your MongoDB collections to quickly set up test data.
    - **Locate the Test User File**: In the `data` folder, find the file containing the test user data (likely named something like `test-users.json`).
    - **Open MongoDB Compass**: Launch MongoDB Compass and connect to your database.
    - **Select the Database**: In Compass, select the database you are using for the automated tests (created in step 1).
    - **Import User Data**:
        - Navigate to the `users` collection within your database. Create it if it doesn't exist
        - Click on the "Add Data" button and select "Import File".
        - Browse to the location of your `test-users.json` file and select it.
        - Choose JSON as the file format and click "Import".
        - The test user data will be added to the `users` collection.
        - user login: 1@1.com/password123
    -  **Locate the Test Hotel File**:
        - Navigate to the `hotels` collection within your database. Create it if it doesn't exist
        - Repeat the import process as you did for the user data, but this time select the `test-hotel.json` file.
        - Ensure the file format is set to JSON and click "Import".
        - The test hotel data will be added to the `hotels` collection.
 
3. **Running tests**    
    - In VS Code install the [Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
    - Navigate to the `e2e-tests` directory.
    - Install dependencies: `npm install`.
    - Start the frontend and backend server using the steps above
    - [Using the Playwright extension to run the tests](https://playwright.dev/docs/getting-started-vscode#running-tests)


