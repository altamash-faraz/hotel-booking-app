# 🚀 Free Deployment Guide - Hotel Booking App

## Overview
This guide will help you deploy your MERN hotel booking application for **completely free** using:
- **Frontend**: Vercel (React/Vite)
- **Backend**: Railway (Node.js/Express)
- **Database**: MongoDB Atlas (already configured)

---

## 🎯 Prerequisites
- ✅ GitHub repository (already done)
- ✅ MongoDB Atlas database (already configured)
- ✅ Working local application

---

## 📦 **Step 1: Prepare Your Application**

### Frontend Preparation
1. **Build Settings**: Your Vite config is already optimized
2. **Environment Variables**: Create production `.env` file

### Backend Preparation
1. **Add Build Script**: Update `package.json`
2. **Environment Variables**: Prepare for production
3. **Port Configuration**: Ensure flexible port binding

---

## 🌐 **Step 2: Deploy Backend to Railway**

### 2.1 Sign Up & Connect GitHub
1. Go to [Railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `hotel-booking-app` repository

### 2.2 Configure Backend Service
1. Railway will auto-detect your Node.js backend
2. Set the **Root Directory** to `backend`
3. Configure environment variables:
   ```
   MONGODB_CONNECTION_STRING=your_mongodb_atlas_string
   JWT_SECRET_KEY=your_jwt_secret
   FRONTEND_URL=https://your-app-name.vercel.app
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   STRIPE_API_KEY=your_stripe_key
   ```

### 2.3 Deploy
- Railway will automatically build and deploy
- Note your Railway backend URL (e.g., `https://your-backend.railway.app`)

---

## 🖥️ **Step 3: Deploy Frontend to Vercel**

### 3.1 Sign Up & Connect GitHub
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `hotel-booking-app` repository

### 3.2 Configure Frontend Settings
1. **Framework Preset**: Vite
2. **Root Directory**: `frontend`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### 3.3 Environment Variables
Add these in Vercel dashboard:
```
VITE_API_BASE_URL=https://your-backend.railway.app
VITE_STRIPE_PUB_KEY=your_stripe_public_key
```

### 3.4 Deploy
- Vercel will build and deploy automatically
- Your app will be live at `https://your-app-name.vercel.app`

---

## 🔧 **Step 4: Update CORS Configuration**

Update your backend `.env` file with the Vercel URL:
```
FRONTEND_URL=https://your-app-name.vercel.app
```

Redeploy the backend on Railway for changes to take effect.

---

## 🎨 **Step 5: Custom Domain (Optional)**

### Vercel Custom Domain
1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 📊 **Free Tier Limitations**

### Vercel Free Tier
- ✅ **Bandwidth**: 100GB/month
- ✅ **Builds**: 6,000 minutes/month
- ✅ **Projects**: Unlimited
- ✅ **Custom domains**: Yes

### Railway Free Tier
- ✅ **Usage**: $5 credit monthly
- ✅ **Memory**: 512MB
- ✅ **Storage**: 1GB
- ⚠️ **Sleep**: App sleeps after inactivity

### MongoDB Atlas Free Tier
- ✅ **Storage**: 512MB
- ✅ **Connections**: 500 concurrent
- ✅ **Clusters**: 1 free cluster

---

## 🔍 **Alternative Free Options**

### Option 1: Netlify + Render
- **Frontend**: Netlify (similar to Vercel)
- **Backend**: Render (free tier with sleep mode)

### Option 2: All-in-One Render
- Deploy both frontend and backend on Render
- Single platform management

### Option 3: GitHub Pages + Heroku
- **Frontend**: GitHub Pages
- **Backend**: Heroku (limited free options)

---

## 🛠️ **Deployment Checklist**

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] Environment variables documented
- [ ] Build scripts working locally
- [ ] Database connection tested

### Railway (Backend)
- [ ] Project created and connected to GitHub
- [ ] Root directory set to `backend`
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] API endpoints accessible

### Vercel (Frontend)
- [ ] Project created and connected to GitHub
- [ ] Root directory set to `frontend`
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Deployment successful
- [ ] App loads properly

### Final Testing
- [ ] Frontend-backend communication working
- [ ] Database operations functioning
- [ ] Authentication flow working
- [ ] Hotel search and booking working
- [ ] UI/UX looks correct

---

## 🎉 **Success!**

Your hotel booking application is now live and accessible worldwide for free! 

**Next Steps:**
1. Share your live URL with friends and family
2. Monitor usage in Railway and Vercel dashboards
3. Consider upgrading to paid tiers as your app grows
4. Set up custom domain for professional appearance

---

## 🆘 **Troubleshooting**

### Common Issues:
1. **CORS Errors**: Ensure FRONTEND_URL matches your Vercel domain
2. **Build Failures**: Check package.json scripts and dependencies
3. **Environment Variables**: Verify all required variables are set
4. **Database Connection**: Confirm MongoDB Atlas IP whitelist includes 0.0.0.0/0

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)