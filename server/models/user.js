import mongoose from 'mongoose'

const userShema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
     },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
      },

    role: { type: String, default: "User" },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},
{timestamps: true})
export default mongoose.model("user", userShema)

