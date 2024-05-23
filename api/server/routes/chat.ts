import express, { Express, Request, Response, Router } from "express"
import { createPrivateInboxController, getChatMessagesController, getInboxDetailsController, getMessagesController, saveMessageController } from "../controllers/chat"
import { authenticateToken } from "../middleware/authentication"


const router = Router()

router.get("/open", getChatMessagesController)
router.get("/create_private_inbox", authenticateToken, createPrivateInboxController)
router.get("/getInboxDetails", authenticateToken, getInboxDetailsController)
router.post("/save_message", authenticateToken, saveMessageController)
router.get("/get_messages", authenticateToken, getMessagesController)

export default router