# 🚀 Development Guide

## Quick Start for Developers

### 1. Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/altamash-faraz/hotel-booking-app.git
   cd hotel-booking-app
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend && npm install

   # Install frontend dependencies
   cd ../frontend && npm install

   # Install e2e test dependencies
   cd ../e2e-tests && npm install
   ```

3. **Environment Configuration**
   ```bash
   # Backend environment
   cd backend
   cp .env.example .env
   # Edit .env with your actual values

   # Frontend environment  
   cd ../frontend
   cp .env.example .env
   # Edit .env with your actual values
   ```

### 2. Development Commands

```bash
# Backend development (with auto-reload)
cd backend && npm run dev

# Frontend development (with hot reload)
cd frontend && npm run dev

# Build for production
cd backend && npm run build
cd frontend && npm run build

# Run tests
cd e2e-tests && npm test
```

### 3. Project Structure

```
hotel-booking-app/
├── backend/          # Node.js + Express.js API
│   ├── src/         # TypeScript source code
│   ├── dist/        # Compiled JavaScript
│   └── .env         # Environment variables
├── frontend/        # React + TypeScript UI
│   ├── src/         # Source components
│   ├── public/      # Static assets
│   └── .env         # Environment variables
├── e2e-tests/       # Playwright tests
└── data/           # Test data and seeds
```

### 4. API Documentation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/hotels` | GET | Get all hotels |
| `/api/hotels` | POST | Create hotel |
| `/api/hotels/:id` | PUT | Update hotel |
| `/api/bookings` | POST | Create booking |
| `/api/bookings` | GET | Get user bookings |

### 5. Database Schema

#### Users Collection
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  createdAt: Date
}
```

#### Hotels Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  name: String,
  city: String,
  country: String,
  description: String,
  type: String,
  adultCount: Number,
  childCount: Number,
  facilities: [String],
  pricePerNight: Number,
  starRating: Number,
  imageUrls: [String],
  lastUpdated: Date
}
```

#### Bookings Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  hotelId: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  adultCount: Number,
  childCount: Number,
  checkIn: Date,
  checkOut: Date,
  totalCost: Number
}
```

### 6. Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 7. Troubleshooting

**Common Issues:**

- **MongoDB Connection Failed**: Check your connection string and network access
- **Stripe Payment Issues**: Verify test keys and webhook configuration
- **Image Upload Problems**: Confirm Cloudinary credentials and quotas
- **Build Errors**: Ensure all environment variables are set correctly

**Useful Commands:**

```bash
# Clear all node_modules
find . -name "node_modules" -type d -exec rm -rf {} +

# Reset and reinstall dependencies
npm run clean && npm install

# Check TypeScript errors
npm run type-check

# Fix ESLint issues
npm run lint --fix
```