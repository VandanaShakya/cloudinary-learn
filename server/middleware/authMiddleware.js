import User from "../models/user.js";
import jwt from "jsonwebtoken";


const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ msg: "Not authorized" });

  const user = await User.findById(token);
  if (!user)
    return res.status(401).json({ msg: "Invalid token" });

  req.userId = user._id;
  next();
};

export default authMiddleware;


export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  const decoded = jwt.verify(token, "SECRET123");
  req.user = await User.findById(decoded.id).select("-password");
  next();
};
