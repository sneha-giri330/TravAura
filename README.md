
# 🌍 Travaura – Travel Listing Web App

A full-stack travel platform where users can explore, create, and review vacation listings. Built with **Node.js**, **Express**, **MongoDB**, **EJS**, and **Passport.js**.

---

## 🚀 Features

- Create, edit, delete property listings
- User authentication (login/register)
- Leave reviews for listings
- Filter by categories
- Flash messages and session-based alerts
- Secure sessions using `connect-mongo`

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap
- **Database**: MongoDB Atlas (via Mongoose)
- **Authentication**: Passport.js (Local Strategy)
- **Sessions**: express-session + connect-mongo

---

## 🛠️ Installation

### 1. Clone the repository
git clone https://github.com/your-username/travaura.git
cd travaura


### 2. Install dependencies
npm install


### 3. Create a `.env` file in the root directory
touch .env

And add the following line (replace with your actual MongoDB Atlas URI):


ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/travaura?retryWrites=true&w=majority


---

## 🏃 Run the App (Development)
Make sure `nodemon` is installed globally:

npm install -g nodemon


Then start the app:
nodemon app.js

Your server will start at:

http://localhost:8080/listings


## 👤 Default User for Testing

- **Username**: `testuser`
- **Password**: `hello`

## 🙌 Author

Built with ❤️ by Sneha Giri
