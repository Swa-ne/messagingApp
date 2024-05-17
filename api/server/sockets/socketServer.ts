import express from "express"
import { Server } from "socket.io";
import http from "http";
import { ChangeUsersStatusToActive, ChangeUsersStatusToInactive, CheckUserStatusIfActive, GetAllActiveUsers } from "../services/active.users";

const app = express();

app.use(express.json())
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:5173/"],
        methods: ["GET", "POST"],
    },
});

io.on("connection", async (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    try {
        const isActive = await CheckUserStatusIfActive(userId);
        console.log("User active status:", isActive);

        if (!isActive) {
            await ChangeUsersStatusToActive(userId, socket.id);
            console.log(`User status changed to active for userId: ${userId}, socketId: ${socket.id}`);
        }
    } catch (error) {
        console.error("Error during user status check or update:", error);
    }
    io.emit("getOnlineUsers", await GetAllActiveUsers(userId));

    socket.on("disconnect", async () => {
        console.log("user disconnected", socket.id);
        await ChangeUsersStatusToInactive(userId)
        io.emit("getOnlineUsers", await GetAllActiveUsers(userId));
    });
});

export { app, io, server };