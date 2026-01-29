import User from "../models/user.js";
import BankAccount from "../models/bankAccount.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const getAllAccounts = async (req, res) => {
  const accounts = await BankAccount.find();
  res.json(accounts);
};
