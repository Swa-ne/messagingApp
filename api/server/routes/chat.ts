import express, { Express, Request, Response, Router } from "express"
import { createPrivateInboxController, getChatMessagesController } from "../controllers/chat"
import { authenticateToken } from "../middleware/authentication"


const router = Router()

router.get("/open", getChatMessagesController)
router.get("/create_private_inbox", authenticateToken, createPrivateInboxController)

export default router