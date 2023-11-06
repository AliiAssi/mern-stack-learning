const { Server } = require('socket.io');

const io = new Server({ cors: "http://localhost:5173" });
let onlineUsers = []; // Correct variable name

io.on("connection", (socket) => {
    console.log("con:", socket.id);

    // Listen to connection 
    socket.on("addNewUser", (userId) => {
        // Check if the user is not already in the onlineUsers array
        if (!onlineUsers.some(user => user.userId === userId)) {
            onlineUsers.push({
                userId,
                socketId: socket.id, // Use socket.id to get the socket ID
            });
        }

        console.log("onlineUsers", onlineUsers);
        io.emit("onlineUsers",onlineUsers)
    });

    socket.on("sendMessage",(message)=>{
        const user = onlineUsers.find(user => user.userId === message.recipientId )
        if(user){
            io.to(user.socketId).emit("getMessage",message)
        }
    })

    
    socket.on("disconnect",()=>{
        onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id )

        io.emit("onlineUsers",onlineUsers)
    })
});

io.listen(3001);
