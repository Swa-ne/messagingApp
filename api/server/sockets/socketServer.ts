import express from "express"
import { Server } from "socket.io";
import http from "http";
import { ChangeUsersStatusToActive, ChangeUsersStatusToInactive, CheckUserStatusIfActive, GetSocketId } from "../services/active.users";
import { getAllActiveUsers } from "../services/user";
const CLIENT_URL: any = process.env.CLIENT_URL;

const app = express();

app.use(express.json())
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: CLIENT_URL,
    },
});

io.on("connection", async (socket) => {

    const userId = socket.handshake.query.userId;
    try {
        const isActive = await CheckUserStatusIfActive(userId);

        if (!isActive) {
            await ChangeUsersStatusToActive(userId, socket.id);
        }
    } catch (error) {
        console.error("Error during user status check or update:", error);
    }
    io.emit("getOnlineUsers", await getAllActiveUsers());

    socket.on("send-msg", async (data) => {
        if (await CheckUserStatusIfActive(data.userId)) {
            const socketId = await GetSocketId(data.userId)
            if (socketId) socket.to(socketId).emit("msg-recieve", data.msg);
        }
    });

    socket.on("disconnect", async () => {
        await ChangeUsersStatusToInactive(userId)
        io.emit("getOnlineUsers", await getAllActiveUsers());
    });
});

export { app, io, server };