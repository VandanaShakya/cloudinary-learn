import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
import { getAllUsers, getAllAccounts } from "../controllers/adminController.js";

const router = express.Router();
router.get("/users", protect, isAdmin, getAllUsers);
router.get("/accounts", protect, isAdmin, getAllAccounts);

export default router;
