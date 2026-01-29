import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'



import dotenv from "dotenv";
dotenv.config(); 

const app = express();

// DB Connect
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: true,
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);     // ✅ Now defined
app.use("/api/admin", adminRoutes);   // ✅ Now defined

// Start Server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
