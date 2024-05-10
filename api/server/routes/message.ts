import express, { Express, Request, Response, Router } from "express"

import { getUsers, openConversation, sendMessage } from "../controllers/message"
import { authenticateToken } from "../middleware/authentication"

const router = Router()

router.get("/getUsers/:userID", getUsers)
router.post("/send", authenticateToken, sendMessage)
router.post("/open", openConversation)

module.exports = router