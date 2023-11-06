const chatModel = require('../Models/chatModel');

// Create chat
const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        const chat = await chatModel.findOne({
            members: {
                $all: [firstId, secondId],
            },
        });

        if (chat) {
            return res.status(200).json(chat);
        }

        const newChat = new chatModel({
            members: [firstId, secondId],
        });

        const response = await newChat.save();

        res.status(201).json(response); // Use 201 for resource creation.
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all chats for the user
const findUserChats = async (req, res) => {
    const userId = req.params.userId;

    try {
        const chats = await chatModel.find({
            members: { $in: [userId] },
        });

        res.status(200).json(chats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Find a chat for a specific user
const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] },
        });

        if (chat) {
            res.status(200).json(chat);
        } else {
            res.status(404).json({ error: 'Chat not found' }); // Use 404 for not found.
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createChat,
    findChat,
    findUserChats,
};
