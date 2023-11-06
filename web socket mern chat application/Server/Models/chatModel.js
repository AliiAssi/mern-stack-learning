const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
    members : Array,
    },
    {
    timestamps: true // Add timestamps for createdAt and updatedAt  
    });

module.exports = mongoose.model("Chat", chatSchema);
