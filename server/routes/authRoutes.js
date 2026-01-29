import express from "express";
import { signup, login, logout, profile, forgotPassword, resetPassword } from "../controllers/authController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authMiddleware, profile);

// forgot password //

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);



export default router;
