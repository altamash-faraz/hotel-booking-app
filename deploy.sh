#!/bin/bash

# 🚀 Quick Deployment Script for Hotel Booking App
echo "🏨 Preparing Hotel Booking App for Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -d "frontend" ] && [ ! -d "backend" ]; then
    echo "❌ Please run this script from the root of your hotel-booking-app project"
    exit 1
fi

echo "✅ Project structure detected"

# Backend preparation
echo "📦 Preparing backend for Railway deployment..."
cd backend

# Install dependencies
echo "⬇️ Installing backend dependencies..."
npm install

# Build the project
echo "🔨 Building backend..."
npm run build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✅ Backend build successful"
else
    echo "❌ Backend build failed"
    exit 1
fi

cd ..

# Frontend preparation
echo "🎨 Preparing frontend for Vercel deployment..."
cd frontend

# Install dependencies
echo "⬇️ Installing frontend dependencies..."
npm install

# Build the project
echo "🔨 Building frontend..."
npm run build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi

cd ..

echo ""
echo "🎉 Both frontend and backend are ready for deployment!"
echo ""
echo "📋 Next Steps:"
echo "1. Deploy backend to Railway:"
echo "   - Go to railway.app"
echo "   - Connect your GitHub repository"
echo "   - Set root directory to 'backend'"
echo "   - Configure environment variables"
echo ""
echo "2. Deploy frontend to Vercel:"
echo "   - Go to vercel.com"
echo "   - Connect your GitHub repository"
echo "   - Set root directory to 'frontend'"
echo "   - Configure environment variables"
echo ""
echo "3. Update CORS settings with your live URLs"
echo ""
echo "🔗 Full deployment guide available in DEPLOYMENT.md"