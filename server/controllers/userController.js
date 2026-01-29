import BankAccount from "../models/bankAccount.js";

export const myProfile = async (req, res) => {
  res.json(req.user);
};

export const myAccounts = async (req, res) => {
  const accounts = await BankAccount.find({ userId: req.user._id });
  res.json(accounts);
};


// upload profile picture//
export const uploadFile = async (req, res) => {
  try {
    res.json({
      message: "File uploaded successfully",
      fileUrl: req.file.path, // Cloudinary URL
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};
