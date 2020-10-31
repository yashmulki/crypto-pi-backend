const mongoose = require('mongoose');
const Transaction = require('./Transaction');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        piTag: { //use this code after pi integration
            type: String,
            required: false
        },
        //pi tag
        ethId: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        azureId: {
            type: String,
            required: false
        },
        transactions: {
            type: [Transaction.schema],
            unique: false,
            default: []
        },
        recentContacts: {
            type: [String],
            required: false,
            unique: false,
            default: []
        },
        balance: {
            type: Number,
            required: true,
            unique: false,
            default: 0
        },
    },
    {strict: false}
)

module.exports = User = mongoose.model("users", UserSchema);