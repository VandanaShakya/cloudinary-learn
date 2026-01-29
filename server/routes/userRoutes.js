import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { myProfile, myAccounts } from "../controllers/userController.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadFile } from "../controllers/uploadController.js";


const router = express.Router();
router.get("/me", protect, myProfile);
router.get("/my-accounts", protect, myAccounts);

router.post("/upload", upload.single("file"), uploadFile);


export default router;
