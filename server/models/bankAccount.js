import mongoose from 'mongoose'

const bankAccountSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    accountNumber: String,
    balance: {
        type: Number,
        default: 0,
    }
    
})
export default mongoose.model("bankAccount", bankAccountSchema)