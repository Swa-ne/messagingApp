import express, { Express, Request, Response, Router } from "express"


import { checkCurrentUser, loginUserController, registerUserController } from "../controllers/entry"
import { authenticateToken } from "../middleware/authentication"

const router = Router()

router.post("/login", loginUserController)
router.post("/checkCurrentUser", authenticateToken, checkCurrentUser)
router.post("/signup", registerUserController)

export default router