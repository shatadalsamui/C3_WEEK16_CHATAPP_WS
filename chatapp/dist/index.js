"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws"); // Imports WebSocket classes from ws library
const wss = new ws_1.WebSocketServer({ port: 8080 }); // Creates WebSocket server on port 8080
let allSockets = []; // Array to track all connected users and their rooms
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        //@ts-ignore
        const parsedMessage = JSON.parse(message); // Converts message JSON string to object
        if (parsedMessage.type == "join") { // Handles room join requests
            console.log("user joined room " + parsedMessage.payload.roomId); // Logs room join event
            allSockets.push({
                socket, // Stores the user's socket
                room: parsedMessage.payload.roomId // Stores which room they joined
            });
        }
        if (parsedMessage.type == "chat") { // Handles chat message requests
            console.log("User wants to chat");
            let currentUserRoom = null; // Variable to store sender's room
            for (let i = 0; i < allSockets.length; i++) { // Finds sender's room
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) { // Broadcasts message to all users in same room
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message); // Sends message to each user
                }
            }
        }
    });
});
