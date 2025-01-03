import express from "express"
import bodyParser from "body-parser"
import cors from 'cors';
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

import entryRoutes from "./routes/entry";
import userRoutes from "./routes/users";
import chatRoutes from "./routes/chat";
import { app, server } from "./sockets/socketServer";

const MONGODB_CONNECTION: any = process.env.MONGODB_CONNECTION;
const CLIENT_URL: any = process.env.CLIENT_URL;
mongoose
  .connect(MONGODB_CONNECTION)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('Internal Server Error');
  });

const port = 3000;
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use("/entry/", entryRoutes)
app.use("/user/", userRoutes)
app.use("/chat/", chatRoutes)

app.get('/', (req, res) => {
  res.send('Hello from your Node.js Express server!');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
