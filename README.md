# 📘 Event Management REST API

This is a complete backend API for managing events and user registrations using **Node.js**, **Express**, and **MongoDB**. It includes CRUD operations for events, user registration, capacity handling, duplicate prevention, and event stats.

---

## 🚀 Features

* Create and list events
* Create users (with duplicate email validation)
* Register users to events
* Cancel user registrations
* Get all future events
* Filter future events by location or sort dynamically
* Get event registration stats (total, remaining, percentage used)
* MongoDB-powered persistence using Mongoose

---

## 🧰 Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB + Mongoose
* **Testing Tool**: Postman

---

## 📦 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ajit180/EventManagement-API.git
   cd EventManagement-API
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   PORT=3002
   MONGO_URI=mongodb+srv://<your-credentials>
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

---

## 📮 API Endpoints

### 📌 Event Routes

| Method | Endpoint                               | Description                                    |
| ------ | -------------------------------------- | ---------------------------------------------- |
| POST   | `/api/event/create`                    | Create a new event                             |
| GET    | `/api/event/getall`                    | Get all events                                 |
| GET    | `/api/event/getfuture`                 | Get all future events (default sorted by date) |
| GET    | `/api/event/getfuture?sortBy=location` | Get future events sorted (by location/title)   |
| POST   | `/api/event/:eventId/register`         | Register a user for an event                   |
| POST   | `/api/event/:eventId/cancel`           | Cancel a user's registration                   |
| GET    | `/api/event/:eventId/stats`            | Get total registrations and usage stats        |

### 👤 User Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/user/create` | Create a new user |

---

## 📊 Event Statistics

When you call:

```
GET /api/event/:eventId/stats
```

You receive:

```json
{
  "totalregistration": 1,
  "remaningcapacity": 199,
  "percentageused": 0.01
}
```

---

## 🛡️ Duplicate Protection

* Users: Duplicate emails are rejected via Mongoose `unique: true` index
* Events: Duplicate events (same title, dateTime, location) are prevented using a compound index

---

## 📁 Postman Collection

You can import the full collection using Postman:

* Go to Postman → Import → Paste raw JSON
* Or use a public Postman link (if exported)

---
