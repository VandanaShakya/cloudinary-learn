import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    accountId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    type: String,
    date: {type: Date, default: Date.now},
})

export default mongoose.model("transation",transactionSchema)