import express from "express"
import bodyParser from "body-parser"
import cors from 'cors';
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

import entryRoutes from "./routes/entry";
import { app } from "./sockets/socketServer";

const MONGODB_CONNECTION: any = process.env.MONGODB_CONNECTION;
cors

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
    origin: ['http://127.0.0.1:5173', "http://localhost:5173"],
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

app.get('/', (req, res) => {
  res.send('Hello from your Node.js Express server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
